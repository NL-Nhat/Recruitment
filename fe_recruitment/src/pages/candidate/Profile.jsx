import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User, Phone, Mail, MapPin, Briefcase, Camera, Save, Edit3 } from 'lucide-react';

const Profile = () => {
  const { currentUser } = useAuth();
  const uv = currentUser?.ungVien;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    hoTen: uv?.hoTen || '',
    soDienThoai: uv?.soDienThoai || '',
    email: currentUser?.email || '',
    chucDanhHienTai: uv?.chucDanhHienTai || '',
    soNamKinhNghiem: uv?.soNamKinhNghiem || 0,
    linkLinkedIn: uv?.linkLinkedIn || '',
    gioiThieu: uv?.gioiThieu || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // In a real app, you would make an API call here.
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Hồ sơ cá nhân</h1>
        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={`btn ${isEditing ? 'btn-primary' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'} shadow-sm gap-2`}
        >
          {isEditing ? <><Save size={18} /> Lưu thay đổi</> : <><Edit3 size={18} /> Chỉnh sửa</>}
        </button>
      </div>

      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border shadow-sm">
        {/* Avatar Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-8 border-b border-border">
          <div className="relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-200 flex items-center justify-center text-4xl text-slate-400 overflow-hidden border-4 border-white shadow-md">
              {uv?.anhDaiDien ? (
                <img src={uv.anhDaiDien} alt={uv.hoTen} className="w-full h-full object-cover" />
              ) : (
                <User size={48} />
              )}
            </div>
            {isEditing && (
              <button className="absolute inset-0 bg-black/40 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={24} />
                <span className="text-xs mt-1">Đổi ảnh</span>
              </button>
            )}
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            {isEditing ? (
              <input 
                type="text" name="hoTen" value={formData.hoTen} onChange={handleChange}
                className="text-2xl sm:text-3xl font-bold text-slate-800 w-full mb-2 bg-slate-50 border border-slate-200 rounded px-3 py-1"
                placeholder="Họ và tên"
              />
            ) : (
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">{formData.hoTen}</h2>
            )}
            
            {isEditing ? (
              <input 
                type="text" name="chucDanhHienTai" value={formData.chucDanhHienTai} onChange={handleChange}
                className="text-primary font-medium w-full mb-4 bg-slate-50 border border-slate-200 rounded px-3 py-1"
                placeholder="Chức danh hiện tại (VD: Senior Backend Dev)"
              />
            ) : (
              <p className="text-primary font-medium mb-4">{formData.chucDanhHienTai}</p>
            )}

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5"><Mail size={16} className="text-slate-400" /> {formData.email}</span>
              <span className="flex items-center gap-1.5"><Phone size={16} className="text-slate-400" /> {formData.soDienThoai}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-slate-400" /> {formData.soNamKinhNghiem} năm kinh nghiệm</span>
            </div>
          </div>
        </div>

        {/* Details Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
            <input 
              type="tel" name="soDienThoai" value={formData.soDienThoai} onChange={handleChange} disabled={!isEditing}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 disabled:bg-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
            <input 
              type="email" name="email" value={formData.email} disabled
              className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg opacity-70 cursor-not-allowed"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Năm kinh nghiệm</label>
            <input 
              type="number" name="soNamKinhNghiem" value={formData.soNamKinhNghiem} onChange={handleChange} disabled={!isEditing} min="0"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 disabled:bg-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Link LinkedIn</label>
            <input 
              type="url" name="linkLinkedIn" value={formData.linkLinkedIn} onChange={handleChange} disabled={!isEditing}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 disabled:bg-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="https://linkedin.com/in/..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Giới thiệu bản thân</label>
            <textarea 
              name="gioiThieu" value={formData.gioiThieu} onChange={handleChange} disabled={!isEditing}
              rows={5}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg disabled:opacity-70 disabled:bg-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              placeholder="Viết vài dòng giới thiệu về kinh nghiệm, định hướng của bạn..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
