import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

function Home() {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex justify-between flex-col text-white pt-10'>
           <HomeHeroText />
           <HomeBottomText />
      </div>
    </div>
  )
}

export default Home