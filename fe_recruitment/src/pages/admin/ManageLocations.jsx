import React, { useState } from 'react';
import { MapPin, RefreshCw, Plus, Edit, Trash2 } from 'lucide-react';
import { locations as mockLocations } from '../../mock/mockData';

const ManageLocations = () => {
  const [locations, setLocations] = useState(mockLocations);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchLocations = () => {
    setIsLoading(true);
    // Giả lập gọi API tải danh sách tỉnh thành
    setTimeout(() => {
      setLocations([
        ...mockLocations,
        { id: 5, name: 'Hải Phòng' },
        { id: 6, name: 'Cần Thơ' }
      ]);
      setIsLoading(false);
      alert('Tải danh sách thành phố thành công (Giao diện mock)');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">Quản lý Địa điểm</h1>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleFetchLocations}
            disabled={isLoading}
            className="btn bg-slate-700 hover:bg-slate-600 text-white flex items-center gap-2 border-none disabled:opacity-50"
          >
            <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
            Tải danh sách Tỉnh/Thành
          </button>
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 border-none">
            <Plus size={18} /> Thêm địa điểm
          </button>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-slate-300 uppercase bg-slate-900">
              <tr>
                <th scope="col" className="px-6 py-4">ID</th>
                <th scope="col" className="px-6 py-4">Tên Tỉnh/Thành phố</th>
                <th scope="col" className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc) => (
                <tr key={loc.id} className="border-b border-slate-700 hover:bg-slate-750 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-500">
                    #{loc.id}
                  </td>
                  <td className="px-6 py-4 font-medium text-white flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    {loc.name}
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

export default ManageLocations;
