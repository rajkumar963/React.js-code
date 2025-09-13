import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center 
                        text-center font-[font1] 
                        mt-40 sm:mt-32 lg:mt-0 px-4"
    >
      {/* First Line */}
      <h1
        className="uppercase flex justify-center items-center
                     text-[12vw] leading-[11vw]
                     sm:text-[10vw] sm:leading-[9vw]
                     lg:text-[9vw] lg:leading-[8vw]"
      >
        The spark for
      </h1>

      {/* Second Line with circular video */}
      <h1
        className="uppercase flex justify-center items-center gap-2
                     text-[12vw] leading-[11vw]
                     sm:text-[10vw] sm:leading-[9vw]
                     lg:text-[9vw] lg:leading-[8vw] mt-3"
      >
        all
        <span
          className="relative inline-block mb-3 h-[6vw] w-[16vw]
                     sm:h-[7vw] sm:w-[16vw]
                     lg:h-[6vw] lg:w-[16vw]
                     rounded-full overflow-hidden border-2 border-white
                     shadow-lg shadow-black/30 flex-shrink-0"
        >
          <Video />
        </span>
        things
      </h1>

      {/* Third Line */}
      <h1
        className="uppercase flex justify-center items-center
                     text-[12vw] leading-[11vw]
                     sm:text-[10vw] sm:leading-[9vw]
                     lg:text-[9vw] lg:leading-[8vw] mt-3"
      >
        creative
      </h1>
    </section>
  );
};

export default HomeHeroText;
