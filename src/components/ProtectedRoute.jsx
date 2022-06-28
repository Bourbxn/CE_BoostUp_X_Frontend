import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const user = window.localStorage.getItem("token");
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
