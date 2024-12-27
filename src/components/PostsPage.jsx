import React, { useEffect, useState } from "react";
import { getPosts } from "./Api";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(response => setPosts(response.data));
  }, []);

  return (
    <div className="page-container">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
