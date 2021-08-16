import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState(null);
  const [isloggingIn, setIsLoggingIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  let serverUrl = 'https://login-server-rn.herokuapp.com';

  const login = pin => {
    setIsLoggingIn(true);
    // handle login
    axios
      .post(`${serverUrl}/login`, { pin })
      .then(({ data }) => {
        setToken(data.token);
        setIsLoggingIn(false);
      })
      .catch(err => {
        setError(err.response.data);
        setIsLoggingIn(false);
      });
  };

  const logout = tkn => {
    setIsLoggingOut(true);
    // handle logout
    axios
      .post(`${serverUrl}/logout`, {
        headers: {
          Authorization: `${tkn}`,
        },
      })
      .then(({ data }) => {
        setLogoutMessage(data.message);
        setToken(null);
        setIsLoggingOut(false);
      })
      .catch(err => {
        setTokenError(err.response.data);
        setIsLoggingOut(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        error,
        tokenError,
        logoutMessage,
        isloggingIn,
        isLoggingOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
