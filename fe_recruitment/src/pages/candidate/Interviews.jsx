import React, { useState } from 'react';
import { getMyInterviews } from '../../mock/mockData';
import { Calendar, Clock, MapPin, Video, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const statusConfig = {
  ChoXacNhan: { label: 'Chờ xác nhận', color: 'bg-yellow-50 text-yellow-700 border-yellow-200', icon: <Clock size={16} /> },
  DaXacNhan: { label: 'Đã xác nhận', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: <CheckCircle size={16} /> },
  HoanThanh: { label: 'Đã hoàn thành', color: 'bg-green-50 text-green-700 border-green-200', icon: <CheckCircle size={16} /> },
  DaHuy: { label: 'Đã hủy', color: 'bg-red-50 text-red-700 border-red-200', icon: <XCircle size={16} /> }
};

const Interviews = () => {
  const allInterviews = getMyInterviews();
  const [filter, setFilter] = useState('upcoming'); // upcoming, past

  const now = new Date();
  
  const filteredInterviews = allInterviews.filter(iv => {
    const isPast = ['HoanThanh', 'DaHuy'].includes(iv.trangThai) || new Date(iv.ngayPhongVan) < now;
    if (filter === 'upcoming') return !isPast;
    return isPast;
  }).sort((a, b) => {
    const d1 = new Date(`${a.ngayPhongVan}T${a.gioPhongVan}`);
    const d2 = new Date(`${b.ngayPhongVan}T${b.gioPhongVan}`);
    return filter === 'upcoming' ? d1 - d2 : d2 - d1;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Lịch phỏng vấn</h1>
        
        {/* Filter Tabs */}
        <div className="bg-slate-100 p-1 rounded-lg inline-flex">
          <button 
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === 'upcoming' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Sắp tới
          </button>
          <button 
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === 'past' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Đã qua
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredInterviews.length > 0 ? (
          filteredInterviews.map(iv => {
            const date = new Date(iv.ngayPhongVan);
            
            return (
              <div key={iv.maLichHen} className="glass-panel p-5 sm:p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row gap-6">
                
                {/* Date Block */}
                <div className="w-full sm:w-32 bg-slate-50 border border-slate-200 rounded-xl flex flex-row sm:flex-col items-center justify-center p-4 shrink-0">
                  <div className="text-slate-500 font-medium uppercase text-sm sm:mb-1">{date.toLocaleString('vi-VN', { month: 'short' })}</div>
                  <div className="text-3xl sm:text-4xl font-black text-primary mx-3 sm:mx-0">{date.getDate()}</div>
                  <div className="text-slate-500 text-sm font-medium sm:mt-1">{date.getFullYear()}</div>
                </div>

                {/* Details Block */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Link to={`/jobs/${iv.job?.id}`} className="text-lg font-bold text-slate-800 hover:text-primary transition-colors">
                        {iv.job?.title || 'Phỏng vấn ứng viên'}
                      </Link>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${statusConfig[iv.trangThai]?.color}`}>
                        {statusConfig[iv.trangThai]?.icon}
                        {statusConfig[iv.trangThai]?.label}
                      </span>
                    </div>
                    <p className="font-medium text-slate-700 mb-4">{iv.job?.company?.name}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-slate-400" />
                        <span>Thời gian: <strong className="text-slate-700">{iv.gioPhongVan}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        {iv.hinhThuc === 'Online' ? (
                          <><Video size={16} className="text-blue-500" /> <span className="font-medium text-blue-600">Online Meeting</span></>
                        ) : (
                          <><MapPin size={16} className="text-red-500" /> <span className="font-medium text-slate-700">Offline (Tại văn phòng)</span></>
                        )}
                      </div>
                      
                      {/* Location or Link */}
                      <div className="md:col-span-2 mt-1">
                        {iv.hinhThuc === 'Online' && iv.linkHop ? (
                          <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <span className="font-medium text-slate-700 whitespace-nowrap">Link họp:</span>
                            <a href={iv.linkHop} target="_blank" rel="noreferrer" className="text-primary hover:underline break-all">{iv.linkHop}</a>
                          </div>
                        ) : iv.hinhThuc === 'Offline' && iv.diaDiem ? (
                          <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <span className="font-medium text-slate-700 whitespace-nowrap">Địa điểm:</span>
                            <span>{iv.diaDiem}</span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {iv.ghiChu && (
                    <div className="text-sm text-slate-500 italic border-t border-slate-100 pt-3 mt-1">
                      Lưu ý: {iv.ghiChu}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="glass-panel p-12 rounded-2xl border border-border text-center">
            <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">Không có lịch phỏng vấn</h3>
            <p className="text-slate-500 mb-6">Bạn chưa có lịch phỏng vấn nào trong thư mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interviews;
