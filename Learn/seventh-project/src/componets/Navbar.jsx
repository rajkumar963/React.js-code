import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
            <h1>Logo</h1>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/college">College</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/users/list">List</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar