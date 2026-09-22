import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, User, Phone, ArrowRight, UserSquare } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', password: '', role: '3'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo mode: simply redirect to login
    navigate('/login', { state: { message: 'Đăng ký thành công! Vui lòng đăng nhập.' } });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <Briefcase className="text-primary group-hover:scale-110 transition-transform" size={32} />
          <span className="text-2xl font-bold text-slate-800">
            Smart<span className="text-primary">Recruit</span>
          </span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Tạo tài khoản mới
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Gia nhập nền tảng tuyển dụng thông minh AI
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="glass-panel py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-white/40">
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Bạn là:</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`cursor-pointer flex items-center justify-center py-2 px-3 border rounded-lg transition-all ${formData.role === '3' ? 'border-primary bg-blue-50 text-primary font-medium' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                  <input type="radio" name="role" value="3" checked={formData.role === '3'} onChange={handleChange} className="sr-only" />
                  <UserSquare className="w-4 h-4 mr-2" /> Ứng viên
                </label>
                <label className={`cursor-pointer flex items-center justify-center py-2 px-3 border rounded-lg transition-all ${formData.role === '2' ? 'border-primary bg-blue-50 text-primary font-medium' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                  <input type="radio" name="role" value="2" checked={formData.role === '2'} onChange={handleChange} className="sr-only" />
                  <Briefcase className="w-4 h-4 mr-2" /> Nhà tuyển dụng
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input name="fullName" type="text" required onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white/50"
                  placeholder="Nhập họ và tên" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input name="email" type="email" required onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white/50"
                  placeholder="name@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input name="phone" type="tel" required onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white/50"
                  placeholder="09xx xxx xxx" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input name="password" type="password" required onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white/50"
                  placeholder="Tạo mật khẩu" />
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-full group py-2.5 text-base">
                Đăng ký tài khoản
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-600">
          Đã có tài khoản?{' '}
          <Link to="/login" className="font-semibold text-primary hover:text-blue-700 transition-colors">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
