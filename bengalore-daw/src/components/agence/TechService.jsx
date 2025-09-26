import { MdOutlineScreenSearchDesktop, MdOutlinePhonelinkSetup } from "react-icons/md";
import { CiCloudSun } from "react-icons/ci";

function TechService() {
  const services = [
    {
      icon: <MdOutlineScreenSearchDesktop />,
      title: "Web Development",
      description: "We create modern, responsive websites and web applications tailored to your business needs."
    },
    {
      icon: <MdOutlinePhonelinkSetup />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: <CiCloudSun />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern businesses."
    },
    {
      icon: <MdOutlinePhonelinkSetup />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: <CiCloudSun />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern businesses."
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black bg-clip-text  mb-4">
            Tech Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering your business with cutting-edge technology solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="text-6xl text-black duration-300 mb-6">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                  {service.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {service.description}
                </p>
                
               
                {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-purple-600 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default TechService;