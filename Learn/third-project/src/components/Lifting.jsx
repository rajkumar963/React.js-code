import React from 'react'

function Lifting({ setUser }) {
  return (
    <div>
        <h1>Lifting State Up</h1>
        <p>
            In React, "lifting state up" refers to the practice of moving state
            from a child component to a parent component. This is done to share
            state between multiple child components or to manage state more
            effectively.
        </p>
        <h3>Add User</h3>
        <input  onChange={(e) => setUser(e.target.value)} type="text"  placeholder='Add New User'/>

    </div>
  )
}

export default Lifting