import { useEffect, useState, useRef } from "react";
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { navigation } from '../../constants';
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [opacity, setOpacity] = useState("bg-white/0");
  const [textColor, setTextColor] = useState("text-White");
  const [image, setImage] = useState("logoOftalmologia.svg");

  useEffect(() => {

    const onNavBarEvent = (event) => {
      if (event.currentTarget.scrollY >= 100 && event.currentTarget.scrollY < 200) {
        setOpacity("bg-white/25");
        setTextColor("text-white/75");
      } else if (event.currentTarget.scrollY >= 200 && event.currentTarget.scrollY < 300) {
        setOpacity("bg-white/50");
        setTextColor("text-black/100");
        setImage("logoOftalmologia2.svg");
      } else if (event.currentTarget.scrollY >= 300 && event.currentTarget.scrollY < 400) {
        setOpacity("bg-white/75");
        setTextColor("text-black/100");
        setImage("logoOftalmologia2.svg");
      } else if (event.currentTarget.scrollY >= 400) {
        setOpacity("bg-white/100");
        setTextColor("text-black/100");
        setImage("logoOftalmologia2.svg");
      } else {
        if (event.currentTarget.scrollY < 100) {
          setOpacity("bg-white/0");
          setTextColor("text-white");
          setImage("logoOftalmologia.svg");
        }
      }
    }

    window.addEventListener("scroll", onNavBarEvent);
    return () => {
      window.removeEventListener("scroll", onNavBarEvent)
    }
  }, [opacity, textColor, image]);

  return (
    <div className={`fixed z-20 w-full ${opacity}`}>
      <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6">
        <div className="flex py-6 justify-between items-center">
          <Link href="/">
          <img src={`/images/${image}`} alt="hoobank" className="w-[170px] cursor-pointer" />
          </Link>

          <ul className="list-none lg:flex hidden justify-end items-center flex-1">
            {navigation.map((nav, index) => (
              <li
                key={nav.name}
                className={`cursor-pointer  text-base  hover:border-b-guindaClaro py-2 border-2 border-transparent text-white
                    ${active === nav.name ? `${textColor} border-b-guindaClaro` : textColor} `}
                onClick={() => setActive(nav.name)}
              >
                <a href={nav.href} className="flex items-center justify-center">
                  <ChevronDownIcon className="w-3  text-transparent " /> {nav.name} <ChevronDownIcon className="w-3 text-transparent" />
                </a>
              </li>
            ))}
            <div className="order-3 mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <a href="#" className="flex items-center justify-center text-base  border border-transparent bg-guindaClaro px-5 py-2 text-white hover:bg-guindaOscuro">
                <MagnifyingGlassIcon className="w-5 mr-1" /> Buscar
              </a>
            </div>
          </ul>

          <div className="lg:hidden">
            <button
              type="button"
              className={`flex items-center justify-center rounded-md p-1 ${textColor}`}
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
                  <img src={`/images/${image}`} alt="hoobank" className="w-[170px]" />
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