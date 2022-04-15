import { useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom";

export const UserContext = createContext({ auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ auth: false });
  const LoggedIn = localStorage.getItem("user");

  if (LoggedIn) {
    useEffect(() => {
      setUser({ auth: true });
    }, []);
  }
  const login = () => {
    setUser({ auth: true });
  };

  const logout = () => {
    localStorage.clear();
    setUser({auth: false });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
