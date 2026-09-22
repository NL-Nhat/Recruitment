import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success
    navigate('/');
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
          <h1 className="text-[1.75rem] font-bold text-text-base mb-2">Chào mừng trở lại</h1>
          <p className="text-text-muted">Đăng nhập để tiếp tục hành trình sự nghiệp của bạn</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-text-base">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Nhập email của bạn" required />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm font-semibold text-text-base">Mật khẩu</label>
              <a href="#" className="text-sm text-primary hover:underline">Quên mật khẩu?</a>
            </div>
            <input type="password" id="password" className="form-input" placeholder="Nhập mật khẩu" required />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">Đăng nhập</button>
        </form>

        <div className="text-center mt-6">
          <p className="text-text-muted">
            Chưa có tài khoản? <Link to="/register" className="text-primary font-medium">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
