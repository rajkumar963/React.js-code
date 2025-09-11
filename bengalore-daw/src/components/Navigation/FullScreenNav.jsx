import React from 'react'

function FullScreenNav() {
  return (
    <div id='fullScreennav' className='h-screen w-full overflow-x-hidden absolute text-white py-10 bg-black z-20 '>
       
        <div className='flex w-full justify-between items-start p-3 '>
           <div className='mt-[-40px]'>
                <div className='h-40 w-60 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                    <path fill='#fff' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
           </div>

           <div className='h-28 w-28 mt-[-40px] cursor-pointer '>
            <div className='h-38 w-1 -rotate-45 origin-top absolute bg-white '></div>
            <div className='h-38 w-1 right-0 rotate-45 origin-top absolute bg-white mr-3 mt-1'></div>
           </div>
        </div>
         
         {/* Menu Links */}
        <div id='all-links' className='mt-[-7vh]'>
            <div className='link relative border-t-1 border-white flex justify-center items-center px-5  '>
                <h1 className='font-[font2] text-[8vw] uppercase leading-[0.7] pt-5 '>WORK</h1>
                <div className='moveLink absolute text-black  flex top-0 bg-[#D5FD50] m-[-1px] z-10 '>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='link relative border-t-1 border-white flex justify-center items-center px-5  '>
                <h1 className='font-[font2] text-[8vw] uppercase leading-[0.7] pt-5 pb-'>AGENCY</h1>
                <div className='moveLink absolute text-black  flex top-0 bg-[#D5FD50] m-[-1px] z-10 '>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='link relative border-t-1 border-white flex justify-center items-center px-5  '>
                <h1 className='font-[font2] text-[8vw] uppercase leading-[0.7] pt-5 '>CONTACT</h1>
                <div className='moveLink absolute text-black  flex top-0 bg-[#D5FD50] m-[-1px] z-10 '>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='link relative border-y-1 border-white flex justify-center items-center px-5  '>
                <h1 className='font-[font2] text-[8vw] uppercase leading-[0.7] pt-5 '>BLOG</h1>
                <div className='moveLink absolute text-black  flex top-0 bg-[#D5FD50] m-[-1px] z-10 '>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    <div className='moveX flex  items-center gap-8 p-1 '>                   
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        <h2 className=' whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.7] pt-4 '>SEE EVERYTHING</h2>
                        <img className='h-[12vh] shrink-0 w-[15vw] rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
                    </div>
                    
                </div>
            </div>

           
            
        </div>
    </div>
  )
}

export default FullScreenNav