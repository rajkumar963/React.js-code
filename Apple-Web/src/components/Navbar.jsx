import React from 'react'

const Navbar = () => {
  return (
    <header>
       <nav>
         <img src="/logo.svg" alt="Apple logo" />
       </nav>
       <ul>
        {[
            {label:'Store'},
            {label:'Mac'},
            {label:'iPad'},
            {label:'iPhone'},
            {label:'Watch'},
            {label:'AirPods'},
            {label:'Vision'},    
        ].map(({label})=>(
          <li key={label}>
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
    </header>
  )
}

export default Navbar;