import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authUser, selectAuth } from "redux/reducers/authReducer";
import { useSelector } from "react-redux";
//you can also import useNavigate

const Navbar = () => {
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth);
  // console.log(auth);
  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(authUser());
  };
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "75px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/post">Post</Link>
      <SignIn auth={auth} handleAuth={handleAuth} />
    </div>
  );
};

const SignIn = ({ auth, handleAuth }) => {
  if (auth) {
    return <button onClick={handleAuth}>Sign Out</button>;
  }
  return <button onClick={handleAuth}>Sign In</button>;
};

export default Navbar;
