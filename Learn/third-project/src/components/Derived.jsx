import React from 'react'

function Derived() {
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState('');

    const handleAddUser = () => {
        setUsers([...users, user]);
        setUser(''); // Clear input after adding user
    }
    const last = users[users.length - 1];    
  return (
    <div>
        <h2>Derived State Component</h2>

        <h3>Total Users: {users.length}</h3>
        <h3>Last User: {last}</h3>
        <h3>Unique Users: {new Set(users).size}</h3>

        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='Add New User' required />
        <button onClick={handleAddUser}>Add User</button>
        {
            users.map((user, index) => <li key={index}>{user}</li>)
        }
    </div>
  )
}

export default Derived;