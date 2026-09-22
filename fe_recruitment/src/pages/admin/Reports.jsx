import React from 'react';
import { BarChart as BarChartIcon, TrendingUp, Users, Briefcase } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Báo cáo Thống kê</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex items-center gap-4">
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Tỷ lệ tuyển dụng thành công</p>
            <h3 className="text-2xl font-bold text-white">68%</h3>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex items-center gap-4">
          <div className="p-4 bg-blue-500/10 text-blue-400 rounded-xl">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Người dùng kích hoạt</p>
            <h3 className="text-2xl font-bold text-white">8,432</h3>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex items-center gap-4">
          <div className="p-4 bg-purple-500/10 text-purple-400 rounded-xl">
            <Briefcase size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Công việc đóng trong tháng</p>
            <h3 className="text-2xl font-bold text-white">142</h3>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 h-96 flex flex-col items-center justify-center text-slate-500">
        <BarChartIcon size={48} className="mb-4 opacity-50" />
        <p>Biểu đồ thống kê sẽ hiển thị ở đây (Mock Data)</p>
      </div>
    </div>
  );
};

export default Reports;
