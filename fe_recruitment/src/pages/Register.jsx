import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('ungvien');

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate register success
    navigate('/login');
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
          <h1 className="auth-title">Tạo tài khoản mới</h1>
          <p className="auth-subtitle text-muted">Bắt đầu hành trình của bạn cùng chúng tôi</p>
        </div>

        <div className="role-selector mb-6">
          <button 
            className={`role-btn ${role === 'ungvien' ? 'active' : ''}`}
            onClick={() => setRole('ungvien')}
          >
            Ứng viên
          </button>
          <button 
            className={`role-btn ${role === 'nhatuyendung' ? 'active' : ''}`}
            onClick={() => setRole('nhatuyendung')}
          >
            Nhà tuyển dụng
          </button>
        </div>

        <form className="auth-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Họ và tên</label>
            <input type="text" id="name" className="form-input" placeholder="Nhập họ và tên" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Nhập email của bạn" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" className="form-input" placeholder="Nhập mật khẩu" required />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">Đăng ký</button>
        </form>

        <div className="auth-footer text-center mt-6">
          <p className="text-muted">
            Đã có tài khoản? <Link to="/login" className="text-primary font-medium">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
