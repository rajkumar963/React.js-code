import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import NotFound from './pages/NotFound'


function App() {

  return (
    <div className='text-black overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/agency" element={<Agence />} />
         <Route path="/works" element={<Projects />} />
         <Route path="*" element={<NotFound/>} />
      </Routes>
      
    </div>
  )
}

export default App