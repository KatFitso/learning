import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "redux/reducers/commentsReducer";

const CommentBox = () => {
  const [state, setState] = useState({
    comment: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(state.comment));
    setState({ comment: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="CommentBox">
      <form onSubmit={handleSubmit}>
        <h3>CommentBox</h3>
        <h4>add a comment</h4>
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
    </div>
  );
};

export default CommentBox;
