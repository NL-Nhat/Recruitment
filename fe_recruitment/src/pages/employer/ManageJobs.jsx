import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { jobs } from '../../mock/mockData';
import { useAuth } from '../../contexts/AuthContext';

const ManageJobs = () => {
  const { currentUser } = useAuth();
  const employerId = currentUser?.nhaTuyenDung?.maNhaTuyenDung;
  const employerJobs = jobs.filter(j => j.companyId === employerId);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Quản lý tin tuyển dụng</h1>
        <Link to="/employer/jobs/new" className="btn btn-primary flex items-center gap-2">
          <Plus size={18} /> Thêm tin mới
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Tìm kiếm tin tuyển dụng..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-primary/20 focus:border-primary block p-2">
            <option>Tất cả trạng thái</option>
            <option>Đang mở</option>
            <option>Đã đóng</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-4 rounded-tl-lg">Tiêu đề</th>
                <th scope="col" className="px-6 py-4">Trạng thái</th>
                <th scope="col" className="px-6 py-4 text-center">Đã nộp / Cần tuyển</th>
                <th scope="col" className="px-6 py-4">Hạn nộp</th>
                <th scope="col" className="px-6 py-4 rounded-tr-lg text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {employerJobs.length > 0 ? employerJobs.map((job) => (
                <tr key={job.id} className="bg-white border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    <div className="font-semibold text-primary">{job.title}</div>
                    <div className="text-xs text-slate-500">{job.department} • {job.location}</div>
                  </td>
                  <td className="px-6 py-4">
                    {job.status === 'DangMo' ? (
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Đang mở</span>
                    ) : (
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">Đã đóng</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center font-medium">
                    <span className="text-primary">{job.appliedCount}</span> / {job.totalPositions}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(job.deadline).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Xem chi tiết">
                        <Eye size={18} />
                      </button>
                      <Link to={`/employer/jobs/edit/${job.id}`} className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors" title="Chỉnh sửa">
                        <Edit size={18} />
                      </Link>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Xóa">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                    Chưa có tin tuyển dụng nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
