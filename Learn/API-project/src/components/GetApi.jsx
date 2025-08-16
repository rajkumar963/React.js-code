import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function GetApi() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate();
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

   const deleteUser=(id)=>{
     fetch(`http://localhost:3000/posts/${id}`,{
       method:'DELETE'
     })
     alert(`User ${id} deleted successfully`);
     getUserData();
     console.log(id);
   }

   const updateUser=(id)=>{
    navigate("/updateuser/"+id);
  }

  return (
    <div style={{padding:"10px"}} >
       <h2>Integrate JSON Server API And Loader</h2>
       <p>This api create by me so you first run/start api then got data</p>
       {
         !loading?
        <table border="1" cellPadding="5" cellSpacing="0" >
        <thead>
          <tr>
            <th> Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button> &nbsp;
                <button onClick={() => updateUser(user.id)}>Update</button>
              </td>

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