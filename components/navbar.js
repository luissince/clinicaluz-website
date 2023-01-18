import { useEffect, useState, useRef } from "react";
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { navLinks } from "../constants";


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Nosotros', href: '#' },
  { name: 'Espacialidades', href: '#' },
  { name: 'Staff Médico', href: '#' },
  { name: 'Sedes', href: '#' },
  { name: 'Otros', href: '#' },
  { name: 'Blog', href: '#' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [opacity, setOpacity] = useState("bg-primary/0");
  const [textColor,setTextColor] = useState("text-white");
  const [border, setBorder] = useState("");
  useEffect(() => {
    // const onNavBarEvent = (event) => {
    //   if (event.currentTarget.scrollY >= 100 && event.currentTarget.scrollY < 200) {
    //     setOpacity("bg-primary/25");
    //   } else if (event.currentTarget.scrollY >= 200 && event.currentTarget.scrollY < 300) {
    //     setOpacity("bg-primary/50");
    //   } else if (event.currentTarget.scrollY >= 300 && event.currentTarget.scrollY < 400) {
    //     setOpacity("bg-primary/75");
    //   } else if (event.currentTarget.scrollY >= 400) {
    //     setOpacity("bg-primary/100");
    //   } else {
    //     if (event.currentTarget.scrollY < 100) {
    //       setOpacity("bg-primary/0");
    //     }
    //   }
    // }

    const onNavBarEvent = (event) => {
      if (event.currentTarget.scrollY >= 100 && event.currentTarget.scrollY < 200) {
        setOpacity("bg-white/25");
        setTextColor("text-black/30");
      } else if (event.currentTarget.scrollY >= 200 && event.currentTarget.scrollY < 300) {
        setOpacity("bg-white/50");
        setTextColor("text-black/50");
      } else if (event.currentTarget.scrollY >= 300 && event.currentTarget.scrollY < 400) {
        setOpacity("bg-white/75");
        setTextColor("text-black/75");
      } else if (event.currentTarget.scrollY >= 400) {
        setOpacity("bg-white/100");
        setTextColor("text-black/100");
      } else {
        if (event.currentTarget.scrollY < 100) {
          setOpacity("bg-white/0");
          setTextColor("text-white");
        }
      }
    }

    window.addEventListener("scroll", onNavBarEvent);
    return () => {
      window.removeEventListener("scroll", onNavBarEvent)
    }
  }, [opacity, textColor]);

  return (
    <div className={`fixed z-20 w-full ${opacity}`}>
      <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6">
        <div className="flex py-3 justify-between items-center">
          <img src={"/images/clinicaLogo.png"} alt="hoobank" className="w-[185px] h-[45px]" />

          <ul className="list-none lg:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                // className={`cursor-pointer text-[15px] hover:bg-slate-900  py-2 border border-transparent
                className={`cursor-pointer text-[17.6px]  hover:border-b-guindaClaro py-2 border-2 border-transparent font-primaSans font-boldCustomer
                    ${active === nav.title ? "text-guindaClaro border-b-guindaClaro" : textColor} `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="flex items-center justify-center">
                  <ChevronDownIcon className="w-4 h-5 text-transparent" /> {nav.title} <ChevronDownIcon className="w-3 h-5 text-transparent" />
                </a>
                {/* <div className="hover-line-button button" style={{ "width": "50%", "background-color": "rgb(208 54 67)" }}>

                </div> */}
              </li>
            ))}
            <div className="order-3 mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <a href="#" className="flex items-center justify-center text-[17.6px] border border-transparent bg-guindaClaro px-5 py-2 font-boldCustomer text-white hover:bg-guindaOscuro">
                <MagnifyingGlassIcon className="w-5 mr-1" /> Buscar
              </a>
            </div>
          </ul>

          <div className="lg:hidden">
            <button
              type="button"
              className="flex items-center justify-center rounded-md p-1 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-20 overflow-y-auto bg-slate-900/[1.0] lg:hidden">
            <div className="flex items-center justify-between container max-w-screen-2xl mx-auto ss:px-12 px-6 py-6">
              <div className="flex">
                <a href="#" className="">
                  <span className="sr-only">Your Company</span>
                  <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md p-1 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root container max-w-screen-2xl mx-auto px-12">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                    <a href="#" className="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900">
                      <MagnifyingGlassIcon className="w-4 mr-1" /> Buscar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;