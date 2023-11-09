import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {

  const isAdmin = user && user.role === "admin";

  if (isAdmin) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
