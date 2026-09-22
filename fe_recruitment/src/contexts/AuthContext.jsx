import React, { createContext, useContext, useState, useCallback } from 'react';
import { mockUsers } from '../mock/mockData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem('smartrecruit_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = useCallback((email, password) => {
    const user = mockUsers.find(
      u => u.email === email && u.matKhau === password
    );
    if (!user) {
      return { success: false, message: 'Email hoặc mật khẩu không đúng.' };
    }
    const safeUser = { ...user, matKhau: undefined }; // không lưu password
    setCurrentUser(safeUser);
    sessionStorage.setItem('smartrecruit_user', JSON.stringify(safeUser));
    return { success: true, user: safeUser };
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    sessionStorage.removeItem('smartrecruit_user');
  }, []);

  const isAuthenticated = !!currentUser;
  const isCandidate = currentUser?.vaiTro === 'UngVien';
  const isEmployer = currentUser?.vaiTro === 'NhaTuyenDung';
  const isAdmin = currentUser?.vaiTro === 'Admin';

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated, isCandidate, isEmployer, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth phải dùng trong AuthProvider');
  return ctx;
};
