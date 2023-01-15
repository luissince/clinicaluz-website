import { useRef, useState } from "react";
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

  return (
    <div>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[15px] hover:bg-slate-900  py-2 border border-transparent
            ${active === nav.title ? "text-white" : "text-slate-400"} `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="flex items-center justify-center">
                <ChevronDownIcon className="w-3 h-5 text-transparent" /> {nav.title} <ChevronDownIcon className="w-3 h-5 text-transparent" /> 
              </a>
            </li>
          ))}
          <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a href="#" class="flex items-center justify-center text-[15px]  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900">
              <MagnifyingGlassIcon className="w-4 mr-1" /> Buscar
            </a>
          </div>
        </ul>

        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-slate-900/[1.0] px-12 py-6 lg:hidden">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
              </a>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <a href="#" class="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900">
                    <MagnifyingGlassIcon className="w-4 mr-1" /> Buscar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;