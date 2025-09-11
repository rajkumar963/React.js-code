import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

function App() {

  return (
    <div className='text-white'>
      <Navbar />
      <FullScreenNav />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/agency" element={<Agence />} />
         <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App