import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signoutUser } from "redux/reducers/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signoutUser());
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/" onClick={handleClick}>
        Sign Out
      </Link>
    </div>
  );
};

export default Navbar;
