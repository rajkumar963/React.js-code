import React, { createContext } from 'react'

export const NavbarContext= createContext();
function NavContext({children}) {

const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div>
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext