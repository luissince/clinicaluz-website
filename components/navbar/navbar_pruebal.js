import { useEffect, useState, useRef } from "react";
import React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

function NavbarPrueba() {
  // useState is used to change the state for start it false means whe we click then only its open otherwise not
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState("bg-white/0");
  const [textColor, setTextColor] = useState("text-White");
  const [image, setImage] = useState("ClinicaLaLuzLogo2.svg");


  useEffect(() => {

    const onNavBarEvent = (event) => {
      if (event.currentTarget.scrollY >= 100 && event.currentTarget.scrollY < 200) {
        setOpacity("bg-white/25");
        setTextColor("text-white/75");
      } else if (event.currentTarget.scrollY >= 200 && event.currentTarget.scrollY < 300) {
        setOpacity("bg-white/50");
        setTextColor("text-black/100");
      } else if (event.currentTarget.scrollY >= 300 && event.currentTarget.scrollY < 400) {
        setOpacity("bg-white/75");
        setTextColor("text-black/100");
        setImage("ClinicaLaLuzLogo.svg");
      } else if (event.currentTarget.scrollY >= 400) {
        setOpacity("bg-white/100");
        setTextColor("text-black/100");
        setImage("ClinicaLaLuzLogo.svg");
      } else {
        if (event.currentTarget.scrollY < 100) {
          setOpacity("bg-white/0");
          setTextColor("text-white");
          setImage("ClinicaLaLuzLogo2.svg");
        }
      }
    }

    window.addEventListener("scroll", onNavBarEvent);
    return () => {
      window.removeEventListener("scroll", onNavBarEvent)
    }
  }, [opacity, textColor, image]);

  return (
    <div>
      {/* for main nav container */}
      <nav className={`fixed z-20 w-full ${opacity}`}>
        <div className="w-full">
          <div className="flex py-6 justify-between items-center">
            {/* first block */}
            <div className="flex items items-center mx-20 justify-between w-full border-2 border-red-500">
              <div className="flex justify-center items-center flex-shrink-0 border-2 border-red-500">
                <img src={`/images/${image}`} alt="hoobank" className="w-[170px]" />
              </div>
              {/* for small screen we don't show tabs that's Y written hidden and on medium device i.e m  we want them as block */}
              <div className="hidden md:block border-2 border-red-500">
                <div className="ml-10 items-baseline space-x-4 ">
                  {/* Link carry some of the properties like activeClass i.e on current page, to i.e on about page if there. smooth i.e transition between tabs,
                  offset i.e time interval transition. duration i.e how much time it will change. */}
                  <Link
                    activeStyle="border:#000000"
                    activeClass="Home"
                    to="home"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3`}>
                    Home
                  </Link>
                  <Link
                    href="nosotros"
                    activeClass="nosotros"
                    to="nosotros"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3`}>
                    Nosotros
                  </Link>
                  <Link
                    activeClass="Especialidades"
                    to="Especialidades"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3`}>
                    Especialidades
                  </Link>
                  <Link
                    activeClass="Pacientes"
                    to="Pacientes"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3`}>
                    Pacientes
                  </Link>
                  <Link
                    activeClass="Equipo Médico"
                    to="Equipo Médico"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3`}>
                    Equipo Médico
                  </Link>
                  <Link
                    activeClass="Contactanos"
                    to="Contactanos"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3 `}>
                    Contactanos
                  </Link>
                  <Link
                    activeClass="Docencia"
                    to="Docencia"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent ${textColor} font-semibold px-3`}>
                    Docencia
                  </Link>
                  <Link
                    activeClass="Buscar"
                    to="Buscar"
                    offset={50}
                    duration={500}
                    smooth={true}
                    className={`cursor-pointer bg-guindaClaro text-base py-2 text-white rounded-lg font-semibold px-3 text-md `}>

                    Buscar
                  </Link>
                </div>
              </div>
            </div>
            {/* Now wework responsive mobile */}
            <div className="mr-10 flex md:hidden">
              {/* It has some property like when we click what will happen on mobile */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="bg-blue-600 inline-flex items-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/* basically i am taking the menu icon from w3 website
                here d is the shape code */}
                {!mobileMenuOpen ? (

                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" //for menu shape
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" //fro cross shape
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* we include transition from headlessui for smoothness in mobile experience  */}
        <Transition
          show={mobileMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            // handle the mobile menu tabs.
            <div className="md:hidden id=mobile-menu" >
              <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                >
                  Home
                </Link>
                <Link
                  href="#"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                >
                  About
                </Link>
                <Link
                  href="#"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                >
                  Work
                </Link>
                <Link
                  href="#"
                  activeClass="Services"
                  to="Services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default NavbarPrueba;