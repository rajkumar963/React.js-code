import React from 'react'

function NestedLoop() {
    const college=[
        {
            name: "IIT",
            city: "Delhi",
            students: [
                {name: "Jyoti Thakur", age: 20, email: "example@example.com"},
                {name: "Tushar Pal", age: 21, email: "example@example.com"},
                {name: "Pammi", age: 22, email: "example@example.com"},
            ]
        },
        {
            name: "IIIT",
            city: "Hyderabad",
            students: [
                {name: "John Doe", age: 19, email: "example@example.com"},
                {name: "Jane Doe", age: 22, email: "example@example.com"},
            ]
        },
        {
            name: "NIT",
            city: "Kolkata",
            students: [
                {name: "Jane Smith", age: 23, email: "example@example.com"},
                {name: "Alice Johnson", age: 24, email: "example@example.com"},
                {name: "Bob Brown", age: 21, email: "example@example.com"},
            ]
        }
    ]

  return (
    <div>
        <h2>Nested Loop with Component</h2>
        {college.map((col) => (
            <div key={col.name}>
                <h3>{col.name}</h3>
                <p>City: {col.city}</p>
                <h4>Students:</h4>
                <table border="1" cellPadding="5" cellSpacing="0" style={{width: "100%", textAlign: "left"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {col.students.map((student) => (
                            <tr key={student.email}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default NestedLoop;