// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// function Agence() {

//   gsap.registerPlugin(ScrollTrigger);
//   const imageDivRef = useRef(null);
//   const imageRef = useRef(null);

//   const imageArray = [
//     "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg"
//   ];
//   useGSAP(function(){
//     gsap.to(imageDivRef.current, {
//       scrollTrigger: {
//         trigger: imageDivRef.current,
//         start:'top 22%',
//         end:'top -125%',
//         scrub: true,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin:1,
//         pinReparent: true,
//         invalidateOnRefresh: true,
//         ease: "none",
//         onUpdate:function(elem){
//           const imgIndex = Math.floor(elem.progress * (imageArray.length-1));
//           imageRef.current.src = imageArray[imgIndex];
//         }
//       }
     
//     });
//   })



//   return (
//     <div>
//       <div className="section1">
//       <div ref={imageDivRef} className='absolute h-[18vw] w-[15vw]  top-20 left-100 z-10'>
//         <img ref={imageRef} className=' rounded-2xl' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt=" img" />
//       </div>
//       <div className=' relative font-[font2]  h-screen w-full z-20'>
//         <div className='mt-[55vh]'>
//           <h1 className='text-[18vw] text-center uppercase text-black leading-[15vw]'>SEVEN7Y <br /> TWO</h1>
//         </div>
//         <div className='pl-[43.5%] mt-10 '>
//           <p className='text-5xl text-black w-full'>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
//         </div>
//       </div>
//       </div>
//       <div className="section2 h-screen">
       
//       </div>
//     </div>
//   )
// }

// export default Agence;



import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import Footer from '../components/Footer'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -190%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <>
      <div className='parent text-black'>
        <div id='page1' className='py-1 '>
          <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-40 -top-80 lg:left-[30vw] left-[30vw]'>
            <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
          </div>
          <div className='relative font-[font2]'>
            <div className='lg:mt-[55vh] mt-[30vh]'>
              <h1 className='text-[15vw] text-center uppercase leading-[18vw]'>visionloom <br />
                Agency</h1>
            </div>
            <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
              <p className='lg:text-5xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
            </div>
          </div>
        </div>
        <div id='page2' className=" h-screen">

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Agence