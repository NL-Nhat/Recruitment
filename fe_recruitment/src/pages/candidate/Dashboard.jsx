import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getMyApplications, getMyInterviews } from '../../mock/mockData';
import { FileText, Calendar, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const applications = getMyApplications();
  const interviews = getMyInterviews();

  // Thống kê đơn
  const totalApps = applications.length;
  const pendingApps = applications.filter(a => ['DaNop', 'AIDaLoc'].includes(a.trangThai)).length;
  const acceptedApps = applications.filter(a => a.trangThai === 'TrungTuyen').length;
  const interviewApps = applications.filter(a => a.trangThai === 'PhongVan').length;

  // Lịch PV sắp tới (chưa hoan thanh/huy)
  const upcomingInterviews = interviews.filter(i => ['ChoXacNhan', 'DaXacNhan'].includes(i.trangThai));

  const stats = [
    { title: 'Tổng đơn ứng tuyển', value: totalApps, icon: <FileText size={24} />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Đang chờ xử lý', value: pendingApps, icon: <Clock size={24} />, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Chờ phỏng vấn', value: interviewApps, icon: <Calendar size={24} />, color: 'bg-purple-100 text-purple-600' },
    { title: 'Đã trúng tuyển', value: acceptedApps, icon: <CheckCircle size={24} />, color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Tổng quan</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="glass-panel p-5 rounded-xl border border-border shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${s.color}`}>
              {s.icon}
            </div>
            <div>
              <p className="text-sm text-text-muted">{s.title}</p>
              <h3 className="text-2xl font-bold text-slate-800">{s.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lịch phỏng vấn gần nhất */}
        <div className="glass-panel rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex justify-between items-center bg-slate-50/50">
            <h2 className="font-semibold text-slate-800">Phỏng vấn sắp tới</h2>
            <Link to="/candidate/interviews" className="text-sm text-primary hover:underline flex items-center">
              Xem tất cả <ChevronRight size={16} />
            </Link>
          </div>
          <div className="p-0">
            {upcomingInterviews.length > 0 ? (
              <div className="divide-y divide-border">
                {upcomingInterviews.map(iv => (
                  <div key={iv.maLichHen} className="p-5 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-lg flex flex-col items-center justify-center shrink-0 border border-purple-200">
                        <span className="text-xs font-medium uppercase">{new Date(iv.ngayPhongVan).toLocaleString('vi-VN', { month: 'short' })}</span>
                        <span className="text-lg font-bold">{new Date(iv.ngayPhongVan).getDate()}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1">{iv.job?.title || 'Phỏng vấn vòng 1'}</h4>
                        <p className="text-sm text-slate-600 mb-1">{iv.job?.company?.name}</p>
                        <div className="flex items-center gap-3 text-xs text-text-muted">
                          <span className="flex items-center gap-1"><Clock size={14} /> {iv.gioPhongVan}</span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">{iv.hinhThuc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500">
                <Calendar size={48} className="mx-auto text-slate-300 mb-3" />
                <p>Không có lịch phỏng vấn nào sắp tới.</p>
              </div>
            )}
          </div>
        </div>

        {/* Đơn ứng tuyển gần đây */}
        <div className="glass-panel rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex justify-between items-center bg-slate-50/50">
            <h2 className="font-semibold text-slate-800">Đơn ứng tuyển gần đây</h2>
            <Link to="/candidate/applications" className="text-sm text-primary hover:underline flex items-center">
              Xem tất cả <ChevronRight size={16} />
            </Link>
          </div>
          <div className="p-0">
            {applications.length > 0 ? (
              <div className="divide-y divide-border">
                {applications.slice(0, 3).map(app => (
                  <div key={app.maDon} className="p-5 hover:bg-slate-50 transition-colors">
                    <h4 className="font-semibold text-slate-800 mb-1">{app.job?.title}</h4>
                    <p className="text-sm text-slate-600 mb-2">{app.job?.company?.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted">Đã nộp: {new Date(app.ngayNop).toLocaleDateString('vi-VN')}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                        app.trangThai === 'TrungTuyen' ? 'bg-green-50 text-green-700 border-green-200' :
                        app.trangThai === 'TuChoi' ? 'bg-red-50 text-red-700 border-red-200' :
                        'bg-blue-50 text-blue-700 border-blue-200'
                      }`}>
                        {app.trangThai}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500">
                <FileText size={48} className="mx-auto text-slate-300 mb-3" />
                <p>Bạn chưa ứng tuyển công việc nào.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
