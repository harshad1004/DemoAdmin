import React, { useEffect, useState, useContext } from "react";
import SignUp from "./Components/Admin/SignUp";
import ProtectedRoute from "./Components/Admin/Routes/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./Components/Admin/ResetPassword";
import routes from "./Components/Admin/Routes/routes";
import Sidebar from "./Components/Admin/Sidebar";

import { UserContext } from "./Components/context/AuthContext";
// import UserProvider from "./Components/context/AuthContext";
// import { UserContext } from "./Components/context/AuthContext";
const App = () => {
  const  {user} =  useContext(UserContext)
  //const [login, setLogin] = useState(user);
  console.log(user,"user");
      
      
  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (userData) {
      localStorage.setItem("Token", userData.accessToken);
      
    }
  }, []);
  
  return (
    <>
      {user.auth &&  <Sidebar />}
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>

      {routes?.length > 0 &&
        routes?.map((route) => (
          <ProtectedRoute
            exact={route?.exact}
            path={route?.path}
            component={route?.component}
          />
          // console.log(route)
        ))}
    </>
  );
};

export default App;