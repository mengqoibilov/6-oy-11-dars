import React, { useEffect, useState } from "react";
import { getComments } from "./Api";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(response => setComments(response.data));
  }, []);

  return (
    <div className="page-container">
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
