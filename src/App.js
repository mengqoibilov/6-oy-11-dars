import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./components/UserPage";
import PostsPage from "./components/PostsPage";
import CommentsPage from "./components/CommentsPage";
import AlbumsPage from "./components/AlbumsPage";
import "./app.css"
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/albums">Albums</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
