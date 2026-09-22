import React from 'react';
import { Briefcase, Users, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Tin đang mở', value: '12', icon: <Briefcase size={24} className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Tổng ứng viên', value: '148', icon: <Users size={24} className="text-purple-500" />, bg: 'bg-purple-50' },
    { label: 'Chờ phỏng vấn', value: '24', icon: <Clock size={24} className="text-orange-500" />, bg: 'bg-orange-50' },
    { label: 'Đã tuyển dụng', value: '5', icon: <CheckCircle size={24} className="text-green-500" />, bg: 'bg-green-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Tổng quan (Mock Data)</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Tin tuyển dụng gần đây</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-800">Senior Golang Developer</h4>
                  <p className="text-sm text-slate-500">Hết hạn: 31/12/2026</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">12 CV</p>
                  <p className="text-xs text-slate-500">Đã nhận</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Ứng viên mới nhất</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    UN
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Ứng viên {idx + 1}</h4>
                    <p className="text-sm text-slate-500">Ứng tuyển: Senior Golang</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                  Chờ duyệt
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
