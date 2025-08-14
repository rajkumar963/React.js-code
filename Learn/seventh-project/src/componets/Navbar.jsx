import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
            <h1>Logo</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/college">College</Link>
                <Link to="/users">User</Link>
                <Link to="/users/list">List</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar