//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import About from './componets/About';
import College from './componets/College';
import UserList from './componets/UserList';
import UserDetails from './componets/UserDetail';

function App() {
  return (
    <BrowserRouter>
          <Navbar />
      <Routes>

        <Route path="/users/list?" element={<UserList />} />
        <Route path="/users/:id/:name?" element={<UserDetails />} />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/college" element={<College />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
