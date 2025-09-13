import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    return (
        <>
        <div className='min-h-screen w-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center p-4 sm:p-6 lg:p-8'>
            {/* Main Heading */}
            <div className='text-center lg:text-left mb-8 lg:mb-0'>
                <h1 className='text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2] xl:leading-[1.1] 2xl:leading-[9rem] font-[font2] text-center lg:text-left'>
                    Page Not <br className='hidden sm:block' /> 
                    <span className='sm:hidden'> </span>Found
                </h1>
            </div>

            {/* Content Section */}
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-md lg:max-w-none'>
                {/* Description */}
                <div className='mb-6 sm:mb-8 lg:mb-10'>
                    <h3 className='text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-[4rem] font-[font2] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-tight xl:leading-tight 2xl:leading-[3.5rem]'>
                        The page you are looking <br className='hidden sm:block' />
                        for could not be found.
                    </h3>
                </div>

                {/* Back to Home Button */}
                <button 
                    onClick={() => navigate('/')} 
                    className='text-base  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[3rem] font-medium border-2 border-black hover:text-[#789b04] hover:border-[#7ea304] cursor-pointer px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:pt-2 rounded-full flex justify-center items-center uppercase transition-all duration-300 w-fit mx-auto lg:mx-0 '
                >
                    Back to Home
                </button>
            </div>
        </div>
         <Footer />
     </>
    )
}

export default NotFound;