import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { NavbarContext } from '../../context/NavContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function FullScreenNav() {

    const navigate=useNavigate();

    const fullNavLinkRef = React.useRef(null);
    const fullScreenRef = React.useRef(null);
    const [navOpen, setNavOpen] = React.useContext(NavbarContext);
    console.log(navOpen);

    // Prevent body scroll when nav is open
    React.useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [navOpen]);

   function gsapAnimation(){
        const tl = gsap.timeline();

        tl.to('.fullscreennav', {
            display: 'block',
        })
        
        tl.to(".stairing",{
            delay:-5,
            height:'100%',
            stagger:{
                amount:-0.3,
            }
        }) 

        tl.to(".link",{
            opacity:1,
            rotateX:0,
            stagger:{
                amount:0.3,
            } 
        })

        tl.to('.navlink',{
            opacity:1, 
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }
    

    useGSAP(function(){
        if(navOpen){ 
           gsap.to('.fullScreennav', {display:'block'})
        gsapAnimation()
        }else{
            gsap.to(".fullScreennav", {display:'none'})
            gsapAnimationReverse()
        }
    } ,[navOpen]);

  return (
    <div ref={fullScreenRef} id='fullScreennav' className='fullScreennav hidden w-full h-screen fixed top-0 left-0 overflow-hidden text-white z-50'>
        <div className='h-screen fixed w-full top-0 left-0'>
            <div className='h-full w-full flex'>
                <div className='stairing h-0 w-1/5 bg-black'></div>
                <div className='stairing h-0 w-1/5 bg-black'></div>
                <div className='stairing h-0 w-1/5 bg-black'></div>
                <div className='stairing h-0 w-1/5 bg-black'></div>
                <div className='stairing h-0 w-1/5 bg-black'></div>
            </div>
        </div>
        <div ref={fullNavLinkRef} className='relative w-full h-screen flex flex-col z-50'>
            <div className='navlink flex w-full justify-between items-start p-3 sm:p-4 mt-4 sm:mt-8 flex-shrink-0'>
                <div className='mt-[-10px] sm:mt-[-20px]'>
                        <div onClick={()=>{setNavOpen(false); navigate('/')}} ref={fullNavLinkRef} className='h-25 sm:h-32 md:h-40 cursor-pointer mt-[-25px]'>
                            <img className='w-20 h-15 sm:w-25 sm:h-15 md:w-24 md:h-15 lg:w-[103px] lg:h-[100px]' src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1758190324/vs_logo_white-removebg_meerx2.png" alt="visionloom logo" />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-8 sm:w-20 sm:h-9 md:w-24 md:h-10 lg:w-[103px] lg:h-[44px]" viewBox="0 0 103 44">
                            <path fill='#fff' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg> */}
                        </div>
                </div>

                <div onClick={()=>{setNavOpen(false)}} className='h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 mt-[-20px] sm:mt-[-30px] md:mt-[-40px] cursor-pointer relative'>
                    <div className='h-16 sm:h-24 md:h-37 w-0.5 sm:w-1 -rotate-50 origin-top absolute bg-white'></div>
                    <div className='h-16 sm:h-24 md:h-36 w-0.5 sm:w-1 right-0 rotate-50 origin-top absolute bg-white mr-1 sm:mr-2 md:mr-3 mt-0.5 sm:mt-1'></div>
                </div>
            </div>
         
            {/* Menu Links */}
            <div id='all-links' className='flex-1 flex flex-col justify-center mt-[-3vh] sm:mt-[-5vh] md:mt-[-7vh] overflow-hidden'>
                <Link to='/works' onClick={() => setNavOpen(false)}>
                   <div className='link origin-top relative border-t-1 border-white flex justify-center items-center px-2 sm:px-3 md:px-5 opacity-0'>
                        <h1 className='font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-3 sm:pt-4 md:pt-5'>WORK</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D5FD50] mt-[-1px] z-20 overflow-hidden'>
                            <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/agency' onClick={() => setNavOpen(false)}>
                  <div className='link origin-top relative border-t-1 border-white flex justify-center items-center px-2 sm:px-3 md:px-5 opacity-0'>
                    <h1 className='font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-3 sm:pt-4 md:pt-5'>AGENCY</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D5FD50] m-[-1px] z-10 overflow-hidden'>
                        <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                            <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                            <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                            <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                        </div>
                        <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                            <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                            <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                            <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                        </div>
                        
                    </div>
                </div>
                </Link>
                <Link to='/contact' onClick={() => setNavOpen(false)}>
                   <div className='link origin-top relative border-t-1 border-white flex justify-center items-center px-2 sm:px-3 md:px-5 opacity-0'>
                        <h1 className='font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-3 sm:pt-4 md:pt-5'>CONTACT</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D5FD50] m-[-1px] z-10 overflow-hidden'>
                            <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                            </div> 
                        </div>
                    </div>
                </Link>
                <Link to='/blog' onClick={() => setNavOpen(false)}>
                  <div className='link origin-top relative border-y-1 border-white flex justify-center items-center px-2 sm:px-3 md:px-5 opacity-0'>
                        <h1 className='font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-3 sm:pt-4 md:pt-5'>BLOG</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D5FD50] m-[-1px] z-10 overflow-hidden'>
                            <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center gap-2 sm:gap-4 md:gap-8 p-1'>                   
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[12vw] sm:text-[10vw] md:text-[8vw] uppercase leading-[0.7] pt-2 sm:pt-3 md:pt-4'>SEE EVERYTHING</h2>
                                <img className='h-[8vh] sm:h-[10vh] md:h-[12vh] shrink-0 w-[20vw] sm:w-[18vw] md:w-[15vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                            </div>
                            
                        </div>
                    </div>  
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FullScreenNav;