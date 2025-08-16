import { Route, Routes, NavLink } from 'react-router'
import './App.css'
import Api from './components/api'
import GetApi from './components/GetApi'
import UserAdd from './components/UserAdd'
import UserUpdate from './components/UserUpdate'

function App() {

  return (
    <>
      {/* <h2>All about API</h2> */}
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/adduser">Add New User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/api" element={<Api/>} />
        <Route path="/" element={<GetApi/>} />

        <Route path="/adduser" element={<UserAdd/>} />
        <Route path="/updateuser/:id" element={<UserUpdate/>} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
