import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Showcase from "./components/Showcase"
import Footer from "./components/Footer"
import Performance from "./components/Performance"
import Features from "./components/Features"
import Highlights from "./components/Highlights"

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
     <main>
       <Navbar/>
       <Hero/>
       <ProductViewer/>
       <Showcase/>
       <Performance/>
       <Features/>
       <Highlights/>
       <Footer/>
     </main>
  )
}

export default App
