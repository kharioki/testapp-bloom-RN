import React, { createContext, useState } from 'react';
// import { useColorScheme } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState(null);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleUser = () => {
    setUser({
      id: '123',
      name: 'John Doe',
      email: 'test@email.com',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
