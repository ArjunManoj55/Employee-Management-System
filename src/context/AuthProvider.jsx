import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admins: [] });

  useEffect(() => {
    // Ensure localStorage is seeded if empty
    const storedData = getLocalStorage();

    if (
      !storedData.employees.length &&
      !storedData.admins.length
    ) {
      setLocalStorage();  // Seed data if none present
    }

    const data = getLocalStorage();
    console.log("LocalStorage data:", data);
    setUserData(data);
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
