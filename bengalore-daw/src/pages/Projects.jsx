import ProjectCard from '../components/projects/ProjectCard'
import {useGSAP} from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer'

function Projects() {
  const projects=[
    {
      image1:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    },
    {
      image1:'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
     },
     {
      image1:'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
     }
  ]
 
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    // Desktop animation
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start:'top 100%',
        end:'bottom -150%',
        scrub: true               
       }
    })
    
    // Mobile animation - more dramatic effect
    gsap.from('.hero-mobile',{
      height:'10vh',
      opacity: 0.3,
      stagger:{
        amount:0.8
      },
      scrollTrigger: {
        trigger: '.lol-mobile',
        start:'top 90%',
        end:'bottom -50%',
        scrub: 1               
       }
    })
  })
 
  return (
    <>
      <div className='p-4 md:p-6 lg:p-8'>
        <div className='pt-[30vh] md:pt-[35vh] lg:pt-[45vh]'>
          <h2 className='font-[font2] text-[12vw] md:text-[10vw] lg:text-[8vw] text-black uppercase'>Projects</h2>
        </div>
        <div className='-mt-4 md:-mt-6 lg:-mt-9 lol'>
          {projects.map(function(elem,idx){
            return <div key={idx} className='hero w-full h-[400px] md:h-[500px] lg:h-[600px] gap-2 md:gap-2.5 flex flex-col md:flex-row mb-2 md:mb-3' >
              <ProjectCard image1={elem.image1} image2={elem.image2}/>
            </div>
          })}
        </div>
      </div>
      {/* <div className='h-[20vh]'>
          
      </div> */}
      <Footer />
    </>
  )
}

export default Projects;