import React from 'react'
import Reuse from './ReuseCompo'

function ReuseComponent() {
    const user=[
        {id:1,name: "Jyoti Thakur", age: 20, email: "example@example.com"},
        {id:2,name: "John Doe", age: 25, email: "john@example.com"},
        {id:3,name: "Jane Smith", age: 30, email: "jane@example.com"}
    ]
  return (
    <div style={{marginTop: "20px", textAlign: "center"}}>
        <h2>Reuse Component</h2>
        <p>This component demonstrates how to reuse a component with different user data.</p>
        {
            user.map((user) => (
                <div key={user.id}>
                    <Reuse user={user} />
                </div>
            ))
        }
    </div>
  )
}

export default ReuseComponent