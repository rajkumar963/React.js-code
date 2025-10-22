import React from 'react'
import { navLink } from '../constants'


const Navbar = () => {
  return (
    <header>
       <nav>
          <img src="/logo.svg" alt="Apple logo" />
          <ul>
            {navLink.map(({label})=>(
              <li key={label} >
                <a href={label}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="" />
            </button>
            <button>
                <img src="/cart.svg" alt="" />
            </button>
          </div>
       </nav>
    </header>
  )
}

export default Navbar;