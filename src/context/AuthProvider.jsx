import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const data = getLocalStorage();
    console.log("LocalStorage data:", data);
    if (data) {
      setUserData(data);
    }
  }, []);



  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
