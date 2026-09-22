import React, { useState } from 'react';
import { getMyApplications } from '../../mock/mockData';
import { Link } from 'react-router-dom';
import { Briefcase, Building, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';

const statusConfig = {
  DaNop: { label: 'Đã nộp', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  AIDaLoc: { label: 'Đang xem xét', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  PhongVan: { label: 'Chờ phỏng vấn', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  TrungTuyen: { label: 'Trúng tuyển', color: 'bg-green-50 text-green-700 border-green-200' },
  TuChoi: { label: 'Từ chối', color: 'bg-red-50 text-red-700 border-red-200' }
};

const Applications = () => {
  const allApps = getMyApplications();
  const [filter, setFilter] = useState('All');

  const filteredApps = filter === 'All' ? allApps : allApps.filter(a => a.trangThai === filter);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Lịch sử ứng tuyển</h1>
        
        {/* Filter */}
        <div className="flex overflow-x-auto pb-1 sm:pb-0 gap-2">
          <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filter === 'All' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
          >
            Tất cả ({allApps.length})
          </button>
          {Object.entries(statusConfig).map(([key, config]) => {
            const count = allApps.filter(a => a.trangThai === key).length;
            if (count === 0) return null;
            return (
              <button 
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filter === key ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {config.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {filteredApps.length > 0 ? (
          filteredApps.map(app => (
            <div key={app.maDon} className="glass-panel p-5 sm:p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Job Info */}
                <div className="flex-1 flex gap-4">
                  <div className="w-16 h-16 rounded-xl border border-slate-200 overflow-hidden shrink-0 bg-white">
                    <img src={app.job?.company?.logo || 'https://via.placeholder.com/150'} alt={app.job?.company?.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Link to={`/jobs/${app.job?.id}`} className="text-lg font-bold text-slate-800 hover:text-primary transition-colors line-clamp-1 mb-1">
                      {app.job?.title}
                    </Link>
                    <Link to={`/companies/${app.job?.companyId}`} className="text-sm font-medium text-primary hover:underline flex items-center gap-1.5 mb-3">
                      <Building size={14} /> {app.job?.company?.name}
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {app.job?.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {app.job?.type}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex flex-col md:items-end justify-between gap-4 md:border-l md:border-slate-100 md:pl-6 min-w-[200px]">
                  <div className="flex flex-col md:items-end gap-1.5">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${statusConfig[app.trangThai]?.color || 'bg-slate-50 text-slate-700'}`}>
                      {statusConfig[app.trangThai]?.label || app.trangThai}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock size={12} /> Cập nhật: {new Date(app.ngayCapNhat).toLocaleDateString('vi-VN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {app.aiReview && (
                      <Link to="/candidate/ai-review" state={{ selectedApp: app.maDon }} className="btn bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 px-3 py-1.5 text-xs">
                        <Sparkles size={14} /> Xem AI Review
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-panel p-12 rounded-2xl border border-border text-center">
            <FileText size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">Không có đơn ứng tuyển nào</h3>
            <p className="text-slate-500 mb-6">Bạn chưa có đơn ứng tuyển nào phù hợp với bộ lọc hiện tại.</p>
            <Link to="/jobs" className="btn btn-primary">Tìm việc ngay</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
