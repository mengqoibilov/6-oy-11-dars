import React, { useEffect, useState } from "react";
import { getUsers } from "./Api";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <div className="page-container">
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
