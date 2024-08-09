import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const email = useSelector((state) => state.user.email);
    const name = useSelector((state) => state.user.name);

   
  if (!email || !name ) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
