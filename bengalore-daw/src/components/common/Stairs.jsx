import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom';

function Stairs(props) {
    const currentPath=useLocation().pathname;
    const stairparentRef = React.useRef(null);
    const pageRef = React.useRef(null);

  useGSAP(function(){
    const tl = gsap.timeline();

    tl.to(stairparentRef.current, {
      display:'block',
    })

    tl.from(".stair",{
      height:0,
      stagger:{
        amount:-0.2,
      }
    })
    tl.to(".stair",{
      y:'100%',
      stagger:{
        amount:-0.2,
      } 
    })
    tl.to(stairparentRef.current,{
      display:'none'
    })

    tl.to(".stair",{
      y:'0%',  
    })

    gsap.from(pageRef.current,{
        delay:1.3,
        opacity:0,
    })
  },[currentPath]);

  return (
   <div>
       <div ref={stairparentRef} className='h-screen w-full  fixed z-20 top-0'>
        <div className='h-full w-full flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
       </div>
       <div ref={pageRef}>
         {props.children}
       </div>
   </div>
  )
}

export default Stairs