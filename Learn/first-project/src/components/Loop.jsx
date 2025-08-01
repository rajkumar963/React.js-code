import React from 'react'

function Loop() {
    const user=[
        {id:1,name: "Jyoti Thakur", age: 20, email: "example@example.com"},
        {id:2,name: "John Doe", age: 25, email: "john@example.com"},
        {id:3,name: "Jane Smith", age: 30, email: "jane@example.com"}
    ]
  return (
    <div>
        <h2>Loop in React</h2>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Loop