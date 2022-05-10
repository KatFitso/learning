import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, fetchComments } from "redux/reducers/commentsReducer";
// import { Link, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import RequireAuth from "RequireAuth";
// import { selectAuth } from "redux/reducers/authReducer";

const CommentBox = () => {
  //setup
  const dispatch = useDispatch();

  //states
  const [state, setState] = useState({
    comment: "",
  });

  //selectors
  // const auth = useSelector(selectAuth);

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(state.comment));
    setState({ comment: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  // if (!auth) return <Navigate to="/" />;
  return (
    <div className="CommentBox">
      <h3>CommentBox</h3>
      <h4>add a comment</h4>
      <Link to="/">read comments</Link>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          value={state.comment}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Submit Comment </button>
        </div>
      </form>
      <button onClick={() => dispatch(fetchComments())}>fetch comments</button>
    </div>
  );
};

export default CommentBox;
