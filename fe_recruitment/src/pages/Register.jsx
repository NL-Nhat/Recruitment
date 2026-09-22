import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('ungvien');

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate register success
    navigate('/login');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-8 px-4"
      style={{ background: 'linear-gradient(135deg, hsl(var(--color-primary-light) / 0.8) 0%, hsl(var(--color-background)) 100%)' }}
    >
      <div className="w-full max-w-[480px] px-8 py-12 bg-white relative glass-panel rounded-xl animate-fade-in">
        <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors">
          <ArrowLeft size={16} /> Quay lại trang chủ
        </Link>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
            <Briefcase className="text-primary" size={32} />
            <span>Smart<span className="text-primary">Recruit</span></span>
          </div>
          <h1 className="text-[1.75rem] font-bold text-text-base mb-2">Tạo tài khoản mới</h1>
          <p className="text-text-muted">Bắt đầu hành trình của bạn cùng chúng tôi</p>
        </div>

        {/* Role selector */}
        <div className="flex bg-background rounded-md p-1 mb-6">
          <button
            type="button"
            className={`flex-1 py-2 rounded-[calc(0.5rem-0.25rem)] font-medium text-sm transition-all ${
              role === 'ungvien'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-muted hover:text-text-base'
            }`}
            onClick={() => setRole('ungvien')}
          >
            Ứng viên
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-[calc(0.5rem-0.25rem)] font-medium text-sm transition-all ${
              role === 'nhatuyendung'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-muted hover:text-text-base'
            }`}
            onClick={() => setRole('nhatuyendung')}
          >
            Nhà tuyển dụng
          </button>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleRegister}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-text-base">Họ và tên</label>
            <input type="text" id="name" className="form-input" placeholder="Nhập họ và tên" required />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-text-base">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Nhập email của bạn" required />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-semibold text-text-base">Mật khẩu</label>
            <input type="password" id="password" className="form-input" placeholder="Nhập mật khẩu" required />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">Đăng ký</button>
        </form>

        <div className="text-center mt-6">
          <p className="text-text-muted">
            Đã có tài khoản? <Link to="/login" className="text-primary font-medium">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
