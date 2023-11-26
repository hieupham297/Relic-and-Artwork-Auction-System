// useLogin.js
import { useState } from "react";

const useLogin = () => {
  const storedLoggedIn = sessionStorage.getItem("isLoggedIn");
  const storedUser = sessionStorage.getItem("userData");
  const storedAdmin = sessionStorage.getItem("isAdmin");

  const [isLoggedIn, setIsLoggedIn] = useState(storedLoggedIn === "true");
  const [userData, setUserData] = useState(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [isAdmin, setIsAdmin] = useState(storedAdmin === "true");

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userData", JSON.stringify(user));
    if (user.role === "admin") {
      setIsAdmin(true);
      sessionStorage.setItem("isAdmin", "true");
      window.location.href = "/admin/user-manage";
    }
  };

  return { isLoggedIn, isAdmin, userData, handleLoginSuccess };
};

export default useLogin;
