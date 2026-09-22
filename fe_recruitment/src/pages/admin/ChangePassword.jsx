import React, { useState } from 'react';
import { Save, Lock } from 'lucide-react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    alert('Đổi mật khẩu thành công (Mock)!');
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Đổi Mật Khẩu</h1>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
            <Lock size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Bảo mật tài khoản</h2>
            <p className="text-sm text-slate-400">Cập nhật mật khẩu thường xuyên để bảo vệ tài khoản Admin.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Mật khẩu hiện tại</label>
            <input 
              type="password" 
              name="currentPassword" 
              value={formData.currentPassword} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 transition-colors" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Mật khẩu mới</label>
            <input 
              type="password" 
              name="newPassword" 
              value={formData.newPassword} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 transition-colors" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Xác nhận mật khẩu mới</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 transition-colors" 
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 flex items-center gap-2 border-none">
              <Save size={18} /> Cập nhật mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
