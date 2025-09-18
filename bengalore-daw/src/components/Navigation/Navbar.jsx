import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navGRef = React.useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);

  const navigate=useNavigate();

  return (
    <div className="fixed top-0 left-0 z-10 flex w-full justify-between items-center px-4 sm:px-6 lg:px-10 py-3 bg-transparent">
      {/* ===== Logo ===== */}
      <div onClick={()=>{ navigate('/')}} className=" h-30 w-30 cursor-pointer mt-[-20px]">
        <img src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1758190324/vs_logo-black_hvqgct.png" alt="visionloom logo" />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 sm:h-8 md:h-12 lg:h-10 xl:h-10 w-auto"
          viewBox="0 0 103 44"
        >
          <path
            fill="#111"
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14
               L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492
               L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492
               L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073
               L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356
               L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346
               L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953
               L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089
               L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z
               M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623
               L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z
               M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346
               L67.9877996,8.4486911 L58.6849955,8.4486911 Z
               M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953
               L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          />
        </svg> */}
      </div>

      {/* ===== Hamburger Button ===== */}
      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          if (navGRef.current) navGRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          if (navGRef.current) navGRef.current.style.height = "0%";
        }}
        className="
          relative cursor-pointer
          h-10 w-14 sm:h-12 sm:w-16 md:h-12 md:w-18
          flex items-center justify-center
          bg-black rounded
          mt-[-30px]
        "
      >
        {/* Green hover fill */}
        <div
          ref={navGRef}
          className="absolute rounded top-0 left-0 h-0 w-full bg-[#D3FD50] transition-all duration-300 ease-in-out"
        ></div>

        {/* Hamburger lines */}
        <div className="relative flex flex-col gap-1 sm:gap-1.5">
          <div className="h-0.5 w-6 sm:w-7 md:w-8 bg-white"></div>
          <div className="h-0.5 w-4 sm:w-5 md:w-6 bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
