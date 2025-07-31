import React from 'react'

function Props({ user }) {
  return (
    <div>
        <h2>Props in React</h2>
        <hr />
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Props;