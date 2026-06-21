import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // when app loads, check if user was already logged in
    const savedUser = localStorage.getItem('care24_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    // save to localStorage so user stays logged in on refresh
    localStorage.setItem('care24_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    // clear from localStorage on logout
    localStorage.removeItem('care24_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);