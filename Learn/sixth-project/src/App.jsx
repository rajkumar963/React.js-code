import {BrowserRouter, Router, Route, Routes,Link } from "react-router"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>&nbsp;  &nbsp;
        <Link to="/about">About</Link> &nbsp; &nbsp;
        <Link to="/blog">Blog</Link> &nbsp; &nbsp;
        <Link to="/contect">Contact</Link> &nbsp; &nbsp;
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
          <Route path="/contect" element={<h1>Contact Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
