import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Tab } from "@headlessui/react";
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Business = () => (
  <section className={`relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-[url('/images/fondoOjo.png')] xl:h-[600px] 2xl:h-[700px]`}>

    <div className="lg:absolute flex relative z-[1] mx-auto w-full">
      <div className="container max-w-screen-2xl mx-auto lg:px-12 px-0">

        <Tab.Group manual >
          <Tab.List className="mb-12 lg:mt-0 mt-6 flex flex-wrap gap-8 mx-6 md:mx-12 lg:mx-0">
            <Tab className={({ selected }) => classNames("border-b-4 border-b-white px-1 xs:px-3 py-2 text-xs xs:text-base text-black transition-colors  hover:text-gray-500 outline-0", selected ? "animate-pulse border-b-guindaClaro" : "")}>
              <span className="relative z-10">Pestaña Uno</span>
            </Tab>
            <Tab className={({ selected }) => classNames("border-b-4 border-b-white px-1 xs:px-3 py-2 text-xs xs:text-base text-black transition-colors  hover:text-gray-500 outline-0", selected ? "animate-pulse border-b-guindaClaro" : "")}>
              <span className="relative z-10">Pestaña Dos</span>
            </Tab>
            <Tab className={({ selected }) => classNames("border-b-4 border-b-white px-1 xs:px-3 py-2 text-xs xs:text-base text-black transition-colors  hover:text-gray-500 outline-0", selected ? "animate-pulse border-b-guindaClaro" : "")}>
              <span className="relative z-10">Pestaña Tres</span>
            </Tab>
          </Tab.List>
          <>
            <div className="lg:hidden xxs:block static left-0 right-0 top-0 bottom-0 z-0 w-screen bg-gray-400">
              <div className="static left-0 right-0 top-0 bottom-0 z-[-1] w-full md:h-8">
                <video
                  autoPlay
                  loop
                  muted
                  width={"100%"}
                  height={"100%"}
                >
                  <source
                    src="/images/ojo3D.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta esta version de video.
                </video>
              </div>
            </div>
          </>
          <Tab.Panels className="md:mt-0 mt-8 mb-10 lg:mb-0">
            <Tab.Panel className="rounded-xl p-3">
              <div className="relative mx-2 xs:mx-12 lg:mx-0">
                <div className="flex mb-2">
                  <img src={"/images/logoOftalmologia2.svg"} alt="hoobank" className="w-[124px]" />
                </div>

                <div className="flex mb-3">
                  <p className=" text-black font-bold text-4xl md:text-5xl">Iris</p>
                </div>

                <div className="w-full md:w-64 lg:w-[24rem] mt-6 lg:h-56">
                  <p className="text-xs xs:text-sm lg:text-lg py-2 text-slate-700 leading-4 xs:leading-6 animate-pulse ">
                    Es un diafragma pigmentado y circular​ del ojo que separa la cámara anterior de la cámara posterior. Además consta de fibras musculares lisas
                    circulares y radiales dispuestas en una estructura en forma de rosca. Posee una abertura central de tamaño variable que comunica las dos cámaras
                    llamada pupila. Su función principal es controlar la cantidad de luz que penetra en el ojo.
                  </p>
                </div>

                <div className="flex xs:mt-8 lg:mt-14">
                  <Link href="/especialidades" className="flex">
                    <p className="flex text-base xs:text-lg md:text-xl cursor-pointer text-slate-700 mr-2" >
                      Nuestras especialidades
                      <ChevronRightIcon className="w-3 xs:w-5 text-slate-700 cursor-pointer mt-[6px] ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="rounded-xl p-3">
              <div className="relative xs:mx-12 md:mx-12 lg:mx-0">
                <div className="flex mb-2">
                  <img src={"/images/logoOftalmologia2.svg"} alt="hoobank" className="w-[124px]" />
                </div>

                <div className="flex mb-3">
                  <p className=" text-black font-bold text-5xl">Cornea</p>
                </div>

                <div className="xs:w-full md:w-64 lg:w-[24rem] mt-6 md:h-40 lg:h-56">
                  <p className="lg:text-lg md:text-sm py-2 text-slate-700 leading-6 animate-pulse">
                    Es la parte frontal transparente del ojo que cubre el iris, la pupila y la cámara anterior. <br />
                    La córnea, junto con la cámara anterior y el cristalino,refracta la luz. <br />
                    Es responsable de dos terceras partes de la capacidad de refracción del ojo.
                  </p>
                </div>

                <div className="flex mt-14 ">
                  <Link href="/especialidades" className="flex">
                    <p className="flex text-xl cursor-pointer text-slate-700 mr-2" >
                      Nuestras especialidades
                      <ChevronRightIcon className="w-5 text-slate-700 cursor-pointer mt-[6px] ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="rounded-xl p-3">
              <div className="relative xs:mx-12 md:mx-12 lg:mx-0">
                <div className="flex mb-2">
                  <img src={"/images/logoOftalmologia2.svg"} alt="hoobank" className="w-[124px]" />
                </div>

                <div className="flex mb-3">
                  <p className=" text-black font-bold text-5xl">Retina</p>
                </div>

                <div className="xs:w-full md:w-64 lg:w-[24rem] mt-6 md:h-40 lg:h-56">
                  <p className="lg:text-lg md:text-sm py-2 text-slate-700 leading-6 animate-pulse">
                    Es un tejido sensible a la luz situado en la superficie interior del ojo. Es similar a una tela donde se proyectan las imágenes. La luz que
                    incide en la retina desencadena una serie de fenómenos químicos y eléctricos que finalmente se traducen en impulsos nerviosos que son enviados
                    hacia el cerebro a través del nervio óptico.
                    <br />
                  </p>
                </div>

                <div className="flex mt-14 ">
                  <Link href="/especialidades" className="flex">
                    <p className="flex text-xl cursor-pointer text-slate-700 mr-2" >
                      Nuestras especialidades
                      <ChevronRightIcon className="w-5 text-slate-700 cursor-pointer mt-[6px] ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>

    {/* video */}
    <div className="xxs:hidden lg:block  static left-0 right-0 top-0 bottom-0 z-0 w-screen bg-gray-400">
      <div className="static left-0 right-0 top-0 bottom-0 z-[-1] w-full">
        <video
          autoPlay
          loop
          muted
          width={"100%"}
          height={"100%"}
        >
          <source
            src="/images/ojo3D.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta esta version de video.
        </video>
      </div>
    </div>

  </section>
);

export default Business;