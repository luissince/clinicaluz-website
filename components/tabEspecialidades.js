import { Tab } from "@headlessui/react";
import classNames from 'classNames';
import Link from "next/link";

export default function TabEspecialidades() {

  return (
    <div className="container px-2 py-16 sm:px-0 mx-auto">
      <Tab.Group manual >
        <Tab.List className="lg:h-16 md:h-96 w-auto mx-auto lg:flex text-center space-x-1 rounded-3xl bg-gray-100 p-1 max-w-full">
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Retina
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Ecografia
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Segmento Anterior
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Cornea
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Orbita
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Estrabismo
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Especialidad
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Glaucoma
          </Tab>
          <Tab className={({ selected }) => classNames("relative block w-full rounded-3xl py-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro", selected ? "bg-white outline-0" : "text-gray-600 border-0")}>
            Enfermedades inflamatorias
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 ">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-8">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Retina?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">El departamento de Retina tiene como objetivo, diagnosticar y tratar a personas con patologías que afectan la retina y el vítreo.<br />
                        <br />
                        La retina es una membrana muy delgada situada en el interior del ojo, cuya función es recibir estímulos luminosos que se traducen en impulsos nerviosos que son enviados a través del nervio óptico hacia el cerebro, en dónde se forman las imágenes.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Se puede ver los distintos sevicios ofrecidos en la compañia</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Procedimientos quiruricos</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Procedimientos que ofrecen a detalle</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="/retina">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/retina1.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Ecografía?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        La ecografía es un método de diagnóstico por imágenes que usa ondas sonoras de alta frecuencia para producir imágenes de las estructuras dentro del cuerpo. Las imágenes pueden brindar información valiosa para el diagnóstico y tratamiento de diversas enfermedades y afecciones.<br />
                        <br />
                        Es una técnica inocua, ágil y cómoda para el paciente que no requiere anestesia en el ojo y que permite identificar claramente las estructuras del globo ocular, además de permitir la detección de patologías que son difíciles de explorar por otros medios
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="images/cliente.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Ecografía</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Estudio de diagnósico<br />
                              Nuestro departamento está equipado con tecnología de punta que nos permite realizar todos los estudios que se ...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Los principales estudios que realizamos son:</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Ecografía modo A<br />
                              Ecografía modo B...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/ecografia1.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Segmento Anterior?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">El departamento de Segmento Anterior del Hospital de la Luz tiene como objetivo diagnosticar y tratar las patologías del segmento anterior del ojo, en particular del cristalino, cuya afección más común es la catarata.</p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Segmento Anterior</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">La catarata se define como la opacidad total o parcial del cristalino, el lente natural del ojo. Dado que todas las imágenes que vemos tienen...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/cirugia.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Procedimientos Quirúrgicos</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Nuestros quirófanos están equipados con tecnología de punta que nos permite realizar todos los procedimientos relacionados co...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/seganterior.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Córnea?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        Este departamento se encarga de diagnosticar y tratar las diferentes patologías que afectan la córnea. Entre las más comunes encontramos errores refractivos, queratocono, conjuntivitis, ojo seco e infecciones.<br />
                        <br />
                        La córnea es la ventana transparente en forma de cúpula que se encuentra en la parte frontal del ojo. Enfoca la luz en él y es afectada por los problemas de la superficie ocular.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Córnea</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Tratamiento de enfermedades comunes<br />
                              <br />Los padecimientos más comunes que se atienden en el departamento de Córnea son: ...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/cirugia.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Procedimientos Quirúrgicos</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Cuando la córnea pierde su transparencia causa desde visión borrosa hasta la incapacidad visual en el paciente. En estos casos se r...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/cornea.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Órbita?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        En el departamento de Órbita, párpados y vías lagrimales (Oculoplástica) contamos con especialistas certificados y tecnología de punta para atender todos los problemas relacionados con los párpados, órbita, vía lagrimal y tumores de los ojos en niños y adultos.<br />
                        <br />
                        Las enfermedades de la órbita muchas veces se relacionan con enfermedades generales (tiroides, neurológicas, cánceres, etc.)
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Órbita</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Tratamiento de enfermedades comunes<br />
                              En este departamento tratamos:<br />
                              <br />
                              Padecimientos de la órbita (cavidad donde se encuentra el ojo)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Estudios de diagnóstico</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Los principales estudios que realizamos son: ...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/orbita.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Estrabismo?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        Este departamento se encarga de tratar casos con estrabismo, una compleja patología que se genera por desviaciones anormales de los ojos,
                        ya sea horizontales convergentes o divergentes o verticales, que se deben al desbalance en las funciones de los músculos extraoculares,
                        encargados de los movimientos armónicos de los globos oculares.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Estrabismo</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Tratamiento de enfermedades comunes<br />
                              Lo diferentes tipos de estrabismo que tratamos son:<br />
                              <br />
                              Esotropia o endotropia<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Estudios de diagnóstico</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                              Los principales estudios que realizamos son:<br />
                              <br />
                              Refracción con cicloplejia mediante retinoscopia<br />
                              Estrabogramas<br />
                              ...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/estrabismo.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Consulta de Especialidad (primera vez)?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        En la Consulta de Especialidad se brinda un estudio oftalmológico integral, y se elabora una historia clínica completa, a
                        veces recurriendo a estudios clínicos y, en su caso, análisis de laboratorio o estudios de gabinete con tecnología de punta.
                        Una vez diagnosticado el cuadro, permite al médico decidir si el paciente requiere ser atendido en un departamento de alta especialidad.
                        En este departamento también se manejan los casos de atención prioritaria (urgencias) las 24 horas del día y procedimientos oculares sencillos.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Consulta de Especialidad</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Procedimiento de la consulta<br />
                              Los pasos que realizamos en la consulta de primera vez son:<br />
                              <br />
                              Examen de refracción<br />
                              Examen Oftalmológico<br />
                              Exploración del segmento anterior<br />
                              Toma de presión ocular<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/consulta.jpg" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Glaucoma?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        El departamento de Glaucoma tiene como objetivo principal el diagnóstico, prevención, y manejo de los pacientes con este cuadro patológico.
                        Actualmente se considera que el glaucoma está constituido en realidad por una serie de cuadros clínicos.
                        Su principal factor de riesgo es la presión ocular por arriba de las cifras normales.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrecemos en el departamento de Glaucoma</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Tratamiento de enfermedades comunes<br />
                              En este departamento tratamos:<br />
                              <br />
                              Glaucoma primario de ángulo abierto<br />
                              Glaucoma de ángulo cerrado<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Procedimientos Quirúrgicos</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                              Nuestros quirófanos están equipados con tecnología de punta que nos permite realizar todos los procedimientos relacionados con las
                              patologías de la retina.<br />
                              ...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/glaucoma.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="mt-20">
              <div className="gap-6 space-y-12 md:flex md:space-y-0">
                <div className="relative md:w-1/2">
                  <div className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-100 scale-100" id="panel-0">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">¿Qué es el departamento de Enfermedades inflamatorias oculares?</h3>
                      <p className="mt-8 text-gray-600 dark:text-gray-300">
                        En este departamento tratamos a todos aquellos pacientes que tengan algún tipo de inflamación, ya sea dentro de la superficie ocular o al
                        interior del ojo. Estas inflamaciones pueden ser de origen traumático, infeccioso, autoinmune y, en algunas ocasiones, neoplásico.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                            <img className="m-auto h-8 w-auto" src="/images/Servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Servicios que ofrece el departamento de Enfermedades inflamatorias oculares</h4>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Tratamiento de enfermedades comunes<br/>
                              En este departamento tratamos:<br/>
                              <br/>
                              Uveítis, Anterior, Intermedia, Posterior<br/>
                              ¿Qué es la Uveítis?<br/>
                              <br/>
                              La uveítis ocurre cuando la capa media del globo ocular se inflama (enrojece e hincha). Esta capa, llamada úvea, tiene muchos vasos sanguíneos q<br/>
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" href="#">
                              Ver mas
                              <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/enfermedades.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}