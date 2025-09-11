import Video from './Video'

function HomeHeroText() {
  return (
    <div className="font-[font1] pt-5 text-center px-5 md:px-20 lg:px-40">
      {/* First Line */}
      <div className="text-[8vw] uppercase leading-[9.2vw] flex justify-center items-center">
        The spark for
      </div>

      {/* Second Line with Video */}
      <div className="text-[8vw] uppercase leading-[9.2vw] flex justify-center items-center">
        all
        <div className="h-[6vw] w-[15vw] mx-2 mb-2 rounded-full overflow-hidden border-2 border-white">
          <Video />
        </div>
        things
      </div>

      {/* Third Line */}
      <div className="text-[8vw] uppercase leading-[9.2vw] flex justify-center items-center">
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
