import React from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const userData = [
    { id: 1, name: "Jyoti Thakur", age: 20, email: "example@example.com" },
    { id: 2, name: "John Doe", age: 25, email: "john@example.com" },
    { id: 3, name: "Jane Smith", age: 30, email: "jane@example.com" },
    { id: 4, name: "Alice Johnson", age: 22, email: "alice@example.com" },
    { id: 5, name: "Bob Williams", age: 28, email: "bob@example.com" },
    { id: 6, name: "Charlie Brown", age: 24, email: "charlie@example.com" }
  ];

  return (
    <div>
      <h1>User List</h1>
      {userData.map((user) => (
        <Link
          to={`/users/${user.id}/${user.name}`}
          state={user} // Pass user object as state
          key={user.id}
          style={{ display: "block" }}
        >
          {user.name}
        </Link>
      ))}
      
    </div>
  );
}

export default UserList;
