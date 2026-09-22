import React from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import { skills } from '../../mock/mockData';

const ManageSkills = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">Quản lý Kỹ năng</h1>
        <button className="btn bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 border-none">
          <Plus size={18} /> Thêm kỹ năng mới
        </button>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-700 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Tìm kiếm kỹ năng..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-slate-300 uppercase bg-slate-900">
              <tr>
                <th scope="col" className="px-6 py-4">Tên kỹ năng</th>
                <th scope="col" className="px-6 py-4">Phân loại</th>
                <th scope="col" className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.id} className="border-b border-slate-700 hover:bg-slate-750 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">
                    {skill.name}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                      {skill.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors" title="Sửa">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="Xóa">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSkills;
