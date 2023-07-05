//TO BE BUILT

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Routes } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const auth = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const SendToLogin = navigate("/login");

  return auth ? (
    <Routes path={path} exact={exact}>
      {children}
    </Routes>
  ) : (
    <SendToLogin />
  );
};

export default ProtectedRoute;
