import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "redux/reducers/auth";

const ProtectedRoutes = ({ children }) => {
  const auth = useSelector(selectAuth);

  useEffect(() => {
    if (!auth) return <Navigate to="/" />;
  });

  return <div>{children}</div>;
};

export default ProtectedRoutes;
