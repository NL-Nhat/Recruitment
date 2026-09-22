import React from 'react';
import { Users, Briefcase, FileText, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Tổng số Người dùng', value: '1,245', icon: <Users size={24} className="text-blue-500" />, bg: 'bg-blue-500/10' },
    { label: 'Tin tuyển dụng', value: '342', icon: <Briefcase size={24} className="text-purple-500" />, bg: 'bg-purple-500/10' },
    { label: 'Hồ sơ Ứng tuyển', value: '4,521', icon: <FileText size={24} className="text-emerald-500" />, bg: 'bg-emerald-500/10' },
    { label: 'Truy cập hôm nay', value: '892', icon: <Activity size={24} className="text-amber-500" />, bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Tổng quan Hệ thống</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
          <h2 className="text-lg font-bold text-white mb-4">Người dùng mới đăng ký</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-750 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
                    US
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">user{idx}@gmail.com</h4>
                    <p className="text-sm text-slate-400">Ứng viên</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">10 phút trước</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
          <h2 className="text-lg font-bold text-white mb-4">Cảnh báo hệ thống</h2>
          <div className="flex items-center justify-center h-48 text-slate-500 border-2 border-dashed border-slate-700 rounded-xl">
            Hệ thống đang hoạt động ổn định
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
