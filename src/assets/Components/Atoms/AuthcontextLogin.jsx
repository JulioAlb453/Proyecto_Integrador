import React, { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [profile, setProfile] = useState(localStorage.getItem('profile'));
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (token) {
        const { exp } = jwtDecode(token);
        if (exp * 1000 < Date.now()) {
          logout();
        }
      }
    };
    checkTokenExpiration();
    const interval = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(interval);
  }, [token]);

  const login = (token, profile) => {
    localStorage.setItem('token', token);
    localStorage.setItem('profile', profile);
    setToken(token);
    setProfile(profile);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    setToken(null);
    setProfile(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ token, profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
