import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container glass-panel animate-fade-in">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Quay lại trang chủ
        </Link>
        
        <div className="auth-header">
          <div className="logo justify-center mb-6">
            <Briefcase className="logo-icon text-primary" size={32} />
            <span className="logo-text text-2xl">Smart<span className="text-primary">Recruit</span></span>
          </div>
          <h1 className="auth-title">Chào mừng trở lại</h1>
          <p className="auth-subtitle text-muted">Đăng nhập để tiếp tục hành trình sự nghiệp của bạn</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Nhập email của bạn" required />
          </div>
          
          <div className="form-group">
            <div className="flex justify-between items-center">
              <label htmlFor="password">Mật khẩu</label>
              <a href="#" className="forgot-password text-primary">Quên mật khẩu?</a>
            </div>
            <input type="password" id="password" className="form-input" placeholder="Nhập mật khẩu" required />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">Đăng nhập</button>
        </form>

        <div className="auth-footer text-center mt-6">
          <p className="text-muted">
            Chưa có tài khoản? <Link to="/register" className="text-primary font-medium">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
