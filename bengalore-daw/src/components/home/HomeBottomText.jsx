import {Link} from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className="font-[font2] flex justify-center  item-center px-5 md:px-20 lg:px-40 mt-auto mb-10 text-white gap-8  md:text-2xl">
      <div className='border-3 border-white px-7 pt-2 rounded-full flex justify-center items-center uppercase hover:text-[#D5FD50] hover:border-[#D5FD50] transition-all duration-300'>
        <Link to='/works' className='text-[5vw] '>Work</Link>
      </div>
      <div className='border-3 border-white px-7 pt-2 rounded-full flex justify-center items-center uppercase hover:text-[#D5FD50] hover:border-[#D5FD50] transition-all duration-300'>
        <Link to='/agency' className='text-[5vw]'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText;