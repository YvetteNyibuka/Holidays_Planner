import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {

  const isAdmin = user && user.role === "admin";

  if (isAdmin) {
    // Render the child components if the user is admin
    return <>{children}</>;
  } else {
    // Redirect to the homepage if the user is not admin
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
