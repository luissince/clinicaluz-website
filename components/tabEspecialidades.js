import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabEspecialidades() {

  return (
    <div className="container px-2 py-16 sm:px-0 mx-auto">
      <Tab.Group manual >
        <Tab.List className="lg:h-16 md:h-96 w-auto mx-auto lg:flex text-center space-x-1 rounded-3xl bg-gray-100 p-1 max-w-full">
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Retina
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Ecografia
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Segmento Anterior
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Cornea
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Orbita
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Estrabismo
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Consulta de Especialidad
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
            Glaucoma
          </Tab>
          <Tab
            className={({ selected }) => classNames(
              "relative block w-full rounded-3xl py-2.5",
              "text-sm font-medium leading-5 text-gray-600 hover:text-guindaClaro",
              selected ? "bg-white outline-0" : "text-gray-600 border-0")}
          >
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Retina?</h3>
                      <p className="mt-8 text-gray-600">El departamento de Retina tiene como objetivo, diagnosticar y tratar a personas con patolog??as que afectan la retina y el v??treo.<br />
                        <br />
                        La retina es una membrana muy delgada situada en el interior del ojo, cuya funci??n es recibir est??mulos luminosos que se traducen en impulsos nerviosos que son enviados a trav??s del nervio ??ptico hacia el cerebro, en d??nde se forman las im??genes.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos</h4>
                            <p className="mt-1 text-gray-600">Se puede ver los distintos sevicios ofrecidos en la compa??ia</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Procedimientos quiruricos</h4>
                            <p className="mt-1 text-gray-600">Procedimientos que ofrecen a detalle</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer " >
                            <Link href="/retina">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                <span>Ver mas</span>
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/retina1.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Ecograf??a?</h3>
                      <p className="mt-8 text-gray-600">
                        La ecograf??a es un m??todo de diagn??stico por im??genes que usa ondas sonoras de alta frecuencia para producir im??genes de las estructuras dentro del cuerpo. Las im??genes pueden brindar informaci??n valiosa para el diagn??stico y tratamiento de diversas enfermedades y afecciones.<br />
                        <br />
                        Es una t??cnica inocua, ??gil y c??moda para el paciente que no requiere anestesia en el ojo y que permite identificar claramente las estructuras del globo ocular, adem??s de permitir la detecci??n de patolog??as que son dif??ciles de explorar por otros medios
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="images/cliente.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de Ecograf??a</h4>
                            <p className="mt-1 text-gray-600">Estudio de diagn??sico<br />
                              Nuestro departamento est?? equipado con tecnolog??a de punta que nos permite realizar todos los estudios que se ...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Los principales estudios que realizamos son:</h4>
                            <p className="mt-1 text-gray-600">Ecograf??a modo A<br />
                              Ecograf??a modo B...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/ecografia">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/ecografia1.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Segmento Anterior?</h3>
                      <p className="mt-8 text-gray-600">El departamento de Segmento Anterior del Hospital de la Luz tiene como objetivo diagnosticar y tratar las patolog??as del segmento anterior del ojo, en particular del cristalino, cuya afecci??n m??s com??n es la catarata.</p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de Segmento Anterior</h4>
                            <p className="mt-1 text-gray-600">La catarata se define como la opacidad total o parcial del cristalino, el lente natural del ojo. Dado que todas las im??genes que vemos tienen...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/cirugia.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Procedimientos Quir??rgicos</h4>
                            <p className="mt-1 text-gray-600">Nuestros quir??fanos est??n equipados con tecnolog??a de punta que nos permite realizar todos los procedimientos relacionados co...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/segmentoAnterior">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/seganterior.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de C??rnea?</h3>
                      <p className="mt-8 text-gray-600">
                        Este departamento se encarga de diagnosticar y tratar las diferentes patolog??as que afectan la c??rnea. Entre las m??s comunes encontramos errores refractivos, queratocono, conjuntivitis, ojo seco e infecciones.<br />
                        <br />
                        La c??rnea es la ventana transparente en forma de c??pula que se encuentra en la parte frontal del ojo. Enfoca la luz en ??l y es afectada por los problemas de la superficie ocular.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de C??rnea</h4>
                            <p className="mt-1 text-gray-600">Tratamiento de enfermedades comunes<br />
                              <br />Los padecimientos m??s comunes que se atienden en el departamento de C??rnea son: ...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/cirugia.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Procedimientos Quir??rgicos</h4>
                            <p className="mt-1 text-gray-600">Cuando la c??rnea pierde su transparencia causa desde visi??n borrosa hasta la incapacidad visual en el paciente. En estos casos se r...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/cornea">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/cornea.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de ??rbita?</h3>
                      <p className="mt-8 text-gray-600">
                        En el departamento de ??rbita, p??rpados y v??as lagrimales (Oculopl??stica) contamos con especialistas certificados y tecnolog??a de punta para atender todos los problemas relacionados con los p??rpados, ??rbita, v??a lagrimal y tumores de los ojos en ni??os y adultos.<br />
                        <br />
                        Las enfermedades de la ??rbita muchas veces se relacionan con enfermedades generales (tiroides, neurol??gicas, c??nceres, etc.)
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de ??rbita</h4>
                            <p className="mt-1 text-gray-600">Tratamiento de enfermedades comunes<br />
                              En este departamento tratamos:<br />
                              <br />
                              Padecimientos de la ??rbita (cavidad donde se encuentra el ojo)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Estudios de diagn??stico</h4>
                            <p className="mt-1 text-gray-600">Los principales estudios que realizamos son: ...</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/orbita">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/orbita.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Estrabismo?</h3>
                      <p className="mt-8 text-gray-600">
                        Este departamento se encarga de tratar casos con estrabismo, una compleja patolog??a que se genera por desviaciones anormales de los ojos,
                        ya sea horizontales convergentes o divergentes o verticales, que se deben al desbalance en las funciones de los m??sculos extraoculares,
                        encargados de los movimientos arm??nicos de los globos oculares.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de Estrabismo</h4>
                            <p className="mt-1 text-gray-600">Tratamiento de enfermedades comunes<br />
                              Lo diferentes tipos de estrabismo que tratamos son:<br />
                              <br />
                              Esotropia o endotropia<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Estudios de diagn??stico</h4>
                            <p className="mt-1 text-gray-600">
                              Los principales estudios que realizamos son:<br />
                              <br />
                              Refracci??n con cicloplejia mediante retinoscopia<br />
                              Estrabogramas<br />
                              ...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/estrabismo">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/estrabismo.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Consulta de Especialidad (primera vez)?</h3>
                      <p className="mt-8 text-gray-600">
                        En la Consulta de Especialidad se brinda un estudio oftalmol??gico integral, y se elabora una historia cl??nica completa, a
                        veces recurriendo a estudios cl??nicos y, en su caso, an??lisis de laboratorio o estudios de gabinete con tecnolog??a de punta.
                        Una vez diagnosticado el cuadro, permite al m??dico decidir si el paciente requiere ser atendido en un departamento de alta especialidad.
                        En este departamento tambi??n se manejan los casos de atenci??n prioritaria (urgencias) las 24 horas del d??a y procedimientos oculares sencillos.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de Consulta de Especialidad</h4>
                            <p className="mt-1 text-gray-600">Procedimiento de la consulta<br />
                              Los pasos que realizamos en la consulta de primera vez son:<br />
                              <br />
                              Examen de refracci??n<br />
                              Examen Oftalmol??gico<br />
                              Exploraci??n del segmento anterior<br />
                              Toma de presi??n ocular<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/consultaEspecialidad">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/consulta.jpg" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Glaucoma?</h3>
                      <p className="mt-8 text-gray-600">
                        El departamento de Glaucoma tiene como objetivo principal el diagn??stico, prevenci??n, y manejo de los pacientes con este cuadro patol??gico.
                        Actualmente se considera que el glaucoma est?? constituido en realidad por una serie de cuadros cl??nicos.
                        Su principal factor de riesgo es la presi??n ocular por arriba de las cifras normales.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrecemos en el departamento de Glaucoma</h4>
                            <p className="mt-1 text-gray-600">Tratamiento de enfermedades comunes<br />
                              En este departamento tratamos:<br />
                              <br />
                              Glaucoma primario de ??ngulo abierto<br />
                              Glaucoma de ??ngulo cerrado<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/estudios.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Procedimientos Quir??rgicos</h4>
                            <p className="mt-1 text-gray-600">
                              Nuestros quir??fanos est??n equipados con tecnolog??a de punta que nos permite realizar todos los procedimientos relacionados con las
                              patolog??as de la retina.<br />
                              ...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/glaucoma">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/glaucoma.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">??Qu?? es el departamento de Enfermedades inflamatorias oculares?</h3>
                      <p className="mt-8 text-gray-600">
                        En este departamento tratamos a todos aquellos pacientes que tengan alg??n tipo de inflamaci??n, ya sea dentro de la superficie ocular o al
                        interior del ojo. Estas inflamaciones pueden ser de origen traum??tico, infeccioso, autoinmune y, en algunas ocasiones, neopl??sico.
                      </p>
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4">
                            <img className="m-auto h-8 w-auto" src="/images/servicio.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                          </div>
                          <div className="w-[calc(100%-7.5rem)]">
                            <h4 className="text-lg font-semibold text-gray-800">Servicios que ofrece el departamento de Enfermedades inflamatorias oculares</h4>
                            <p className="mt-1 text-gray-600">Tratamiento de enfermedades comunes<br />
                              En este departamento tratamos:<br />
                              <br />
                              Uve??tis, Anterior, Intermedia, Posterior<br />
                              ??Qu?? es la Uve??tis?<br />
                              <br />
                              La uve??tis ocurre cuando la capa media del globo ocular se inflama (enrojece e hincha). Esta capa, llamada ??vea, tiene muchos vasos sangu??neos q<br />
                              ....
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer" >
                            <Link href="/enfermedadesOculares">
                              <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro">
                                Ver mas
                                <svg className="h-8 w-8 text-white pt-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                  <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                      <div data-target="panel-0" className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                        <img src="/images/enfermedades.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="850" height="1780" />
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