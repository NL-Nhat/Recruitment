import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const CompanyProfile = () => {
  const { currentUser } = useAuth();
  const user = currentUser?.nhaTuyenDung || {};

  const [formData, setFormData] = useState({
    name: user.tenCongTy || '',
    phone: user.soDienThoai || '',
    website: user.website || '',
    address: user.diaChi || '',
    description: user.moTa || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Đã lưu (Mock)');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Hồ sơ công ty</h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
            {user.logo ? (
              <img src={user.logo} alt="Logo" className="w-24 h-24 object-cover rounded-xl border border-slate-200" />
            ) : (
              <div className="w-24 h-24 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm">No Logo</div>
            )}
            <div>
              <button type="button" className="btn btn-outline text-sm px-4 py-2">Thay đổi Logo</button>
              <p className="text-xs text-slate-500 mt-2">Định dạng JPG, PNG. Tối đa 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên công ty</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Website</label>
              <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Địa chỉ trụ sở</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả công ty</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={5} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"></textarea>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="btn btn-primary px-8 flex items-center gap-2">
              <Save size={18} /> Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;
