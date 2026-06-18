import React, { createContext, useState, useContext } from 'react';

// create the context - think of it as a "box" that holds user info
const AuthContext = createContext();

// this Provider wraps our whole app so every page can access the user info
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // user will look like: { name: 'Anjali', role: 'user' } when logged in
  // or null when not logged in

  // called when user submits login form
  const login = (userData) => {
    setUser(userData);
  };

  // called when user clicks logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook so we can easily use this context in any page
export const useAuth = () => useContext(AuthContext);