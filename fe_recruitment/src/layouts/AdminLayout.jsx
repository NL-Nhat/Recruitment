import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { 
  Briefcase, 
  LayoutDashboard, 
  Users, 
  Settings,
  BarChart,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Shield,
  MapPin,
  KeySquare
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Tổng quan' },
    { path: '/admin/users', icon: <Users size={20} />, label: 'Quản lý Người dùng' },
    { path: '/admin/skills', icon: <Settings size={20} />, label: 'Quản lý Kỹ năng' },
    { path: '/admin/roles', icon: <Shield size={20} />, label: 'Quản lý Vai trò' },
    { path: '/admin/locations', icon: <MapPin size={20} />, label: 'Địa điểm' },
    { path: '/admin/reports', icon: <BarChart size={20} />, label: 'Báo cáo Thống kê' },
  ];

  return (
    <div className="flex h-screen bg-slate-900 font-sans text-slate-300 overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-950 border-r border-slate-800 z-10">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <Briefcase className="text-blue-500" size={26} />
            <span>Smart<span className="text-blue-500">Admin</span></span>
          </Link>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="font-semibold text-white truncate">{currentUser?.hoTen || 'Quản trị viên'}</p>
              <p className="text-xs text-blue-400">System Admin</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link 
            to="/admin/change-password"
            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
          >
            <KeySquare size={20} />
            Đổi mật khẩu
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-950/50 hover:text-red-300 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-950 border-r border-slate-800 z-50 transform transition-transform duration-300 md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <Briefcase className="text-blue-500" size={26} />
            <span>Smart<span className="text-blue-500">Admin</span></span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-400 hover:text-white">
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
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-800 space-y-2">
            <Link 
              to="/admin/change-password"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
            >
              <KeySquare size={20} />
              Đổi mật khẩu
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-950/50 hover:text-red-300 rounded-lg transition-colors"
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
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-sm flex items-center justify-between px-4 sm:px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm hệ thống..." 
                className="pl-10 pr-4 py-2 bg-slate-800 border-none rounded-full text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 w-64 transition-all focus:w-80"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
