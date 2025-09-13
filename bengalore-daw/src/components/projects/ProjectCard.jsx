function ProjectCard(props) {
  return (
    <>
      <div className="group w-full md:w-1/2 relative h-[200px] md:h-full overflow-hidden rounded-none hover:rounded-2xl md:hover:rounded-4xl hover:scale-[1.01] md:hover:scale-101 transition-transform duration-400 cursor-pointer mb-2 md:mb-0">
        <img className="w-full h-full object-cover" src={props.image1} alt=""/>
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/25">
          <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-[font2] border-2 border-white px-3 md:px-4 lg:px-6 pt-1 md:pt-2 rounded-full">
            View Project
          </h2>
        </div>
      </div>
      <div className="group w-full md:w-1/2 relative h-[200px] md:h-full overflow-hidden rounded-none hover:rounded-2xl md:hover:rounded-4xl hover:scale-[1.01] md:hover:scale-101 transition-all duration-400 cursor-pointer">
        <img className="w-full h-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/25">
          <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-[font2] border-2 border-white px-3 md:px-4 lg:px-6 pt-1 md:pt-2 rounded-full">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;