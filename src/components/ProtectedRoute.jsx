import React from "react";
import { Navigate } from "react-router-dom";
import getCookie from "../hook/getCookie";
const ProtectedRoute = ({ children }) => {
  const user = getCookie("token");
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
