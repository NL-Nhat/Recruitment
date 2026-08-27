import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Briefcase, ChevronDown } from 'lucide-react';
import { industries } from '../mock/mockData';
import './GuestLayout.css';

const GuestLayout = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="guest-layout">
      {/* Header */}
      <header className="header glass-panel">
        <div className="container header-container">
          <Link to="/" className="logo">
            <Briefcase className="logo-icon text-primary" size={28} />
            <span className="logo-text">Smart<span className="text-primary">Recruit</span></span>
          </Link>
          
          <nav className="nav-links">
            <Link to="/" className="nav-link">Trang chủ</Link>
            
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="nav-link flex items-center gap-1 cursor-pointer" onClick={() => navigate('/jobs')}>
                Việc làm <ChevronDown size={14} />
              </div>
              
              {showDropdown && (
                <div className="dropdown-menu animate-fade-in">
                  <div className="dropdown-grid">
                    {industries.map(ind => (
                      <Link 
                        key={ind.id} 
                        to={`/jobs?industry=${ind.id}`} 
                        className="dropdown-item"
                        onClick={() => setShowDropdown(false)}
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <Link to="/jobs" className="text-primary text-sm font-medium hover:underline" onClick={() => setShowDropdown(false)}>
                      Xem tất cả việc làm
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/companies" className="nav-link">Công ty</Link>
            <Link to="/about" className="nav-link">Giới thiệu</Link>
            <Link to="/contact" className="nav-link">Liên hệ</Link>
          </nav>
          
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">Đăng nhập</Link>
            <Link to="/register" className="btn btn-primary">Đăng ký</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-col">
            <div className="logo mb-4">
              <Briefcase className="logo-icon text-primary" size={24} />
              <span className="logo-text">Smart<span className="text-primary">Recruit</span></span>
            </div>
            <p className="text-muted">Nền tảng tuyển dụng thông minh với công nghệ AI hỗ trợ đánh giá ứng viên chuyên sâu.</p>
          </div>
          
          <div className="footer-col">
            <h3>Dành cho Ứng viên</h3>
            <ul>
              <li><Link to="/jobs">Tìm việc làm</Link></li>
              <li><Link to="/companies">Danh sách công ty</Link></li>
              <li><Link to="/register">Tạo hồ sơ</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Nhà Tuyển Dụng</h3>
            <ul>
              <li><Link to="/register">Đăng tin tuyển dụng</Link></li>
              <li><Link to="/login">Tìm kiếm nhân tài</Link></li>
              <li><Link to="#">Bảng giá dịch vụ</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Liên hệ</h3>
            <ul>
              <li>Email: contact@smartrecruit.vn</li>
              <li>Hotline: 1900 1234</li>
              <li>Địa chỉ: Tòa nhà Tech, Hà Nội</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container text-center text-muted">
            <p>&copy; {new Date().getFullYear()} SmartRecruit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestLayout;
