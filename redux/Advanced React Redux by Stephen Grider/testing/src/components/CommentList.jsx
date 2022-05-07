import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectComments, addComment } from "redux/reducers/commentsReducer";

const CommentList = () => {
  const comments = useSelector(selectComments);
  // const [comments, setComments] = useState(["first"]);
  return (
    <div className="CommentList">
      {comments.map((comment, i) => (
        <p key={i}>{comment}</p>
      ))}
    </div>
  );
};

export default CommentList;
