import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setToken } from "redux/reducers/auth";
import { getCookie, setCookie } from "util/cookies";

const Home = () => {
  const authToken = getCookie("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToken(authToken));
  }, []);

  return <div>Sign up or Sign in</div>;
};

export default Home;
