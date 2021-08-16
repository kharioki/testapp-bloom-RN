import React, { createContext, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  let serverUrl = 'https://login-server-rn.herokuapp.com';

  const login = pin => {
    // handle login
    axios
      .post(`${serverUrl}/login`, { pin })
      .then(data => {
        setToken(data.token);
        setIsLoggedIn(true);
      })
      .catch(err => {
        setError(err.response.data);
      });
  };

  const logout = tkn => {
    // handle logout
    axios
      .post(`${serverUrl}/logout`, {
        headers: {
          Authorization: `${tkn}`,
        },
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        setError(err.response.data);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        isLoggedIn,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
