import React, { useState } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { Briefcase, ChevronDown, User, Calendar, LogOut, Menu, X, KeySquare } from 'lucide-react';
import { industries } from '../mock/mockData';
import { useAuth } from '../contexts/AuthContext';

const GuestLayout = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, currentUser, logout, isCandidate } = useAuth();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const user = currentUser?.ungVien;
  const initials = user?.hoTen
    ? user.hoTen.split(' ').map(w => w[0]).slice(-2).join('')
    : 'UV';

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

            <nav className="hidden md:flex gap-8 items-center h-full">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold after:scale-x-100' : ''}`}>Trang chủ</NavLink>

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

              <NavLink to="/companies" className={({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold after:scale-x-100' : ''}`}>Công ty</NavLink>
              
              {isCandidate && (
                <>
                  <NavLink to="/candidate/applications" className={({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold after:scale-x-100' : ''}`}>Đơn ứng tuyển</NavLink>
                  <NavLink to="/candidate/ai-review" className={({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold after:scale-x-100' : ''}`}>Đánh giá AI</NavLink>
                </>
              )}

              <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold after:scale-x-100' : ''}`}>Giới thiệu</NavLink>
              <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'text-primary font-semibold after:scale-x-100' : ''}`}>Liên hệ</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <div className="relative" 
                  onMouseEnter={() => setIsUserMenuOpen(true)}
                  onMouseLeave={() => setIsUserMenuOpen(false)}
                >
                  <button className="flex items-center gap-2 hover:bg-slate-50 p-1.5 rounded-full transition-colors border border-transparent hover:border-slate-200">
                    {user?.anhDaiDien ? (
                      <img src={user.anhDaiDien} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        {initials}
                      </div>
                    )}
                    <span className="text-sm font-medium text-slate-700 max-w-[120px] truncate">
                      {user?.hoTen || 'User'}
                    </span>
                    <ChevronDown size={16} className={`text-slate-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50 animate-fade-in-up origin-top-right before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                      {isCandidate && (
                        <>
                          <Link 
                            to="/candidate/profile" 
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <User size={18} className="text-slate-400" /> Thông tin cá nhân
                          </Link>
                          <Link 
                            to="/candidate/interviews" 
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Calendar size={18} className="text-slate-400" /> Lịch phỏng vấn
                          </Link>
                          <Link 
                            to="/candidate/change-password" 
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <KeySquare size={18} className="text-slate-400" /> Đổi mật khẩu
                          </Link>
                        </>
                      )}
                      <div className="h-px bg-slate-100 my-1"></div>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={18} className="text-red-400" /> Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline">Đăng nhập</Link>
                  <Link to="/register" className="btn btn-primary">Đăng ký</Link>
                </>
              )}
            </div>

            <button 
              className="md:hidden text-slate-600 p-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background">
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
