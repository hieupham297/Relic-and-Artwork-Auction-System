// useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    if (user.role === "admin") {
      setIsAdmin(true);
      navigate("/admin/user-manage");
    }
  };

  return { isLoggedIn, isAdmin, userData, handleLoginSuccess };
};

export default useLogin;
