
function TechService() {
  const services=[
    {
      icons:"tech/web.png",
      name:"Web Development",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat."
    },
    {
      icons:"tech/app.png",
      name:"App Development",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat."
    },
    {
      icons:"tech/ui.png",
      name:"UI/UX Design",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat."
    }
  ]
  return (
    <div className='h-screen w-screen relative flex justify-between flex-col text-black pt-10'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>Tech Service </h1>
        <div className='flex justify-between flex-col text-white pt-10'>
          <div className='flex justify-between items-center  text-black bg-gray-100 pt-10'>
            {
              services.map((service,index)=>
              (
                <div key={index} className='flex flex-col items-center justify-center  '>
                  <img className='w-20 h-20' src={service.icons} alt="" />
                  <h3 className='text-2xl font-bold'>{service.name}</h3>
                  <p className='text-lg'>{service.description}</p>w-1/3
                </div>
              ))
            } 
          </div>
        </div>
    </div>
  )
}

export default TechService