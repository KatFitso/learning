import React, { useState } from "react";
import { signupUser, selectAuth, selectErr } from "redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector(selectAuth);
  const errorMsg = useSelector(selectErr);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(state));
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <h2>{isAuthed ? "true" : "false"}</h2>
      <h3>{isAuthed}</h3>
      <h3>{errorMsg}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
