import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "redux/reducers/commentsReducer";
import { Link } from "react-router-dom";

const CommentList = () => {
  const comments = useSelector(selectComments);
  return (
    <div className="CommentList">
      <h4>Comment List</h4>
      <Link to={"/post"}>Post new message</Link>
      {comments.map((comment, i) => (
        <p key={i}>{comment}</p>
      ))}
    </div>
  );
};

export default CommentList;
