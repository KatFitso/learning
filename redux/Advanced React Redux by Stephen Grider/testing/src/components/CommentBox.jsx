import React, { useState } from "react";

const CommentBox = () => {
  const [state, setState] = useState({
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({ comment: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
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
