import React, { useState } from 'react';
import { KeySquare, Save } from 'lucide-react';

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
    alert('Chức năng đổi mật khẩu (Mock UI)');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <KeySquare className="text-primary" size={28} />
        <h1 className="text-2xl font-bold text-slate-800">Đổi mật khẩu</h1>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Mật khẩu hiện tại</label>
            <input 
              type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Nhập mật khẩu hiện tại"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Mật khẩu mới</label>
            <input 
              type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Nhập mật khẩu mới"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Xác nhận mật khẩu mới</label>
            <input 
              type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Nhập lại mật khẩu mới"
            />
          </div>

          <div className="pt-4">
            <button type="submit" className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-8">
              <Save size={18} /> Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
