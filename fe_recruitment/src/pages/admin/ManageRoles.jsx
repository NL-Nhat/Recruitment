import React from 'react';
import { Shield, Plus, Edit } from 'lucide-react';

const ManageRoles = () => {
  const roles = [
    { id: 1, name: 'Admin', description: 'Quản trị viên toàn quyền hệ thống' },
    { id: 2, name: 'NhaTuyenDung', description: 'Nhà tuyển dụng, công ty' },
    { id: 3, name: 'UngVien', description: 'Ứng viên tìm việc' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">Quản lý Vai trò</h1>
        <button className="btn bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 border-none">
          <Plus size={18} /> Thêm vai trò
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Shield size={24} />
              </div>
              <h2 className="text-xl font-bold text-white">{role.name}</h2>
            </div>
            <p className="text-slate-400 text-sm flex-1">{role.description}</p>
            <div className="mt-6 pt-4 border-t border-slate-700">
              <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                <Edit size={16} /> Chỉnh sửa quyền hạn
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRoles;
