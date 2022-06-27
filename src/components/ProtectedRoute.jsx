import React from "react";
import { Navigate } from "react-router-dom";
import { currentUser } from "../service/authService";
const ProtectedRoute = ({ children }) => {
  const user = currentUser();
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
