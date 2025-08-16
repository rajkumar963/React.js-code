import React, { useEffect, useState } from 'react';

function Api() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let res = await fetch(url);
    res = await res.json();
    setUserData(res.users);
  }

  return (
    <div>
      <h2>Fetch API in React And  Make Routes and page for add new user</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th> Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Api;
