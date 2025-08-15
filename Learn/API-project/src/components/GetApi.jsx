import React from 'react'
import { useEffect, useState } from 'react';

function GetApi() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUserData();
        setLoading(true);
    },[])
   const getUserData = async () => {
        const url ='http://localhost:3000/posts'
        let res = await fetch(url);
        res = await res.json();
        setLoading(false);
        setUserData(res);
        // console.log(res); 
   }
  return (
    <div>
       <h2>Integrate JSON Server API And Loader</h2>
       {
         !loading?
        <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th> Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
          
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      :
      <h2>Data Loading...</h2>
       }
    </div>
  )
}

export default GetApi