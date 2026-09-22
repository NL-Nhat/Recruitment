import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Briefcase, ChevronDown } from 'lucide-react';
import { industries } from '../mock/mockData';

const GuestLayout = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-panel">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <Briefcase className="text-primary" size={28} />
              <span>Smart<span className="text-primary">Recruit</span></span>
            </Link>

            <nav className="flex gap-8">
              <Link to="/" className="nav-link">Trang chủ</Link>

              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="nav-link flex items-center gap-1 cursor-pointer" onClick={() => navigate('/jobs')}>
                  Việc làm <ChevronDown size={14} />
                </div>

                {showDropdown && (
                  <div className="animate-fade-in absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg border border-border w-max min-w-[400px] p-4 z-[100] mt-4 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                    <div className="grid grid-cols-2 gap-2">
                      {industries.map(ind => (
                        <Link
                          key={ind.id}
                          to={`/jobs?industry=${ind.id}`}
                          className="px-3 py-2 rounded-md text-[0.9rem] text-text-base transition-colors hover:bg-primary-light/50 hover:text-primary"
                          onClick={() => setShowDropdown(false)}
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed border-border text-center">
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

            <div className="flex gap-4">
              <Link to="/login" className="btn btn-outline">Đăng nhập</Link>
              <Link to="/register" className="btn btn-primary">Đăng ký</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border pt-16 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Briefcase className="text-primary" size={24} />
                <span>Smart<span className="text-primary">Recruit</span></span>
              </div>
              <p className="text-text-muted">Nền tảng tuyển dụng thông minh với công nghệ AI hỗ trợ đánh giá ứng viên chuyên sâu.</p>
            </div>

            <div>
              <h3 className="text-[1.1rem] font-semibold mb-6 text-text-base">Dành cho Ứng viên</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/jobs" className="text-text-muted text-[0.95rem] hover:text-primary transition-colors">Tìm việc làm</Link></li>
                <li><Link to="/companies" className="text-text-muted text-[0.95rem] hover:text-primary transition-colors">Danh sách công ty</Link></li>
                <li><Link to="/register" className="text-text-muted text-[0.95rem] hover:text-primary transition-colors">Tạo hồ sơ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[1.1rem] font-semibold mb-6 text-text-base">Nhà Tuyển Dụng</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/register" className="text-text-muted text-[0.95rem] hover:text-primary transition-colors">Đăng tin tuyển dụng</Link></li>
                <li><Link to="/login" className="text-text-muted text-[0.95rem] hover:text-primary transition-colors">Tìm kiếm nhân tài</Link></li>
                <li><Link to="#" className="text-text-muted text-[0.95rem] hover:text-primary transition-colors">Bảng giá dịch vụ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[1.1rem] font-semibold mb-6 text-text-base">Liên hệ</h3>
              <ul className="flex flex-col gap-3">
                <li className="text-text-muted text-[0.95rem]">Email: contact@smartrecruit.vn</li>
                <li className="text-text-muted text-[0.95rem]">Hotline: 1900 1234</li>
                <li className="text-text-muted text-[0.95rem]">Địa chỉ: Tòa nhà Tech, Hà Nội</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-sm">
          <div className="container text-center text-text-muted">
            <p>&copy; {new Date().getFullYear()} SmartRecruit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestLayout;
