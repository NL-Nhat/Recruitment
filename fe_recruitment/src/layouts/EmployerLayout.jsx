import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { 
  Briefcase, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Building2,
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const EmployerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const user = currentUser?.nhaTuyenDung;
  const initials = user?.tenCongTy
    ? user.tenCongTy.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
    : 'HR';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/employer/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/employer/jobs', icon: <FileText size={20} />, label: 'Quản lý tin tuyển dụng' },
    { path: '/employer/candidates', icon: <Users size={20} />, label: 'Quản lý ứng viên' },
    { path: '/employer/interviews', icon: <Calendar size={20} />, label: 'Lịch phỏng vấn' },
    { path: '/employer/company-profile', icon: <Building2 size={20} />, label: 'Hồ sơ công ty' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-text-base overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-border shadow-sm z-10">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Briefcase className="text-primary" size={26} />
            <span>Smart<span className="text-primary">HR</span></span>
          </Link>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3">
            {user?.logo ? (
              <img src={user.logo} alt="logo" className="w-12 h-12 rounded-lg object-cover border border-slate-200" />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                {initials}
              </div>
            )}
            <div className="overflow-hidden">
              <p className="font-semibold text-slate-800 truncate" title={user?.tenCongTy || 'Company'}>
                {user?.tenCongTy || 'Company'}
              </p>
              <p className="text-xs text-slate-500">Nhà tuyển dụng</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Briefcase className="text-primary" size={26} />
            <span>Smart<span className="text-primary">HR</span></span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-500 hover:text-slate-800">
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4 mt-4 border-t border-border">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              Đăng xuất
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Topbar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-border shadow-sm flex items-center justify-between px-4 sm:px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm ứng viên, tin đăng..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all focus:w-80"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2 cursor-pointer">
              {user?.logo ? (
                <img src={user.logo} alt="avatar" className="w-8 h-8 rounded-full object-cover border border-slate-200" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/20">
                  {initials}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployerLayout;
