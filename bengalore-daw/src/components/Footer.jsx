

function Footer() {
    return (
        <div className='flex flex-col text-white bg-black min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:h-[350px]'>
            {/* Top Section - Social Media and Contact */}
            <div className='flex flex-col sm:flex-row justify-between items-center font-[font2] mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5 gap-4 sm:gap-0'>
                {/* Social Media Links */}
                <div className='flex gap-2 sm:gap-3 md:gap-4 order-2 sm:order-1'>
                    <a href="" aria-label="Twitter/X">                                   
                        <button className='text-sm sm:text-base md:text-lg lg:text-3xl font-bold uppercase border-2 border-white px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
                            X
                        </button>
                    </a>
                    <a href="" aria-label="LinkedIn">                                   
                        <button className='text-sm sm:text-base md:text-lg lg:text-3xl font-bold uppercase border-2 border-white px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
                            IN
                        </button>
                    </a>
                    <a href="" aria-label="Instagram">                                   
                        <button className='text-sm sm:text-base md:text-lg lg:text-3xl font-bold uppercase border-2 border-white px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
                            IG
                        </button>
                    </a>
                </div>

                {/* Contact Button */}
                <div className='order-1 sm:order-2'>
                    <button className='text-sm sm:text-base md:text-lg lg:text-3xl uppercase border-2 border-white px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
                        Contact❤️
                    </button>
                </div>
            </div>

            {/* Middle Section - Brand Name */}
            <div className='flex-1 flex justify-center items-center px-4'>
                <div className='text-center'>
                    <p className='text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] 2xl:text-[12vw] uppercase font-[font2] opacity-15 leading-none'>
                        VisionLoom
                    </p>
                </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className='flex justify-center items-center pb-3 sm:pb-4 md:pb-5 px-4'>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-[font2] text-center'>
                    Copyright © 2025. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer