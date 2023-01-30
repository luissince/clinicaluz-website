import Format from '../layout/format';

function Orbita() {
    return (
        <Format type="nav">
            <section className="header relative pt-16 items-center flex h-screen max-h-full">
                <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-guindaClaro">
                                Orbita
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                En el departamento de Órbita, párpados y vías lagrimales (Oculoplástica) contamos con especialistas certificados y tecnología de
                                punta para atender todos los problemas relacionados con los párpados, órbita, vía lagrimal y tumores de los ojos en niños y adultos.
                                <br />
                                Las enfermedades de la órbita muchas veces se relacionan con enfermedades generales (tiroides, neurológicas, cánceres, etc.) y
                                requieren la atención de un oftalmólogo especializado en patologías orbitarias. Los traumatismos orbitarios requieren ser atendidos
                                rápidamente para evitar complicaciones a nivel de la visión.
                                <br />
                                En los párpados es frecuente tratar quistes palpebrales como chalazión o verrugas, bordes evertidos o invertidos, bolsas palpebrales o
                                párpados caídos. En el caso de las vías lagrimales es común tratar obstrucciones, ya que son una causa frecuente de lagrimeo e infecciones
                                oculares.
                            </p>
                            <div className="mt-12">
                                <a href="" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-guindaOscuro active:bg-guindaClaro uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                    Agenda una cita
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/especialidades/orbita.png" alt="..." />

                    <svg viewBox="0 0 1 1">
                        <defs>
                            <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                <path d="M73.379,0l-0.2.5,0.2,0.5H74V0H73.379ZM73.344,0l-0.2.5-0.09-.227,0.1-.252L73.147,0h0.2Zm-0.3.316,0.147,0.368-0.063.154L73.186,1H73.124L73,0.693l0.052-.139L73,0.419Zm0.18,0.377L73.342,1H73.224l-0.064-.158Z" transform="translate(-73)" fill="#fff" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </section>

            <section className="mt-48 md:mt-40 pb-40 relative bg-slate-200">
                <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 border-0">
                    <svg className="absolute bottom-0 overflow-hidden border-0" viewBox="0 0 2560 100">
                        <path d="M-2,102L2560,0V102H-2Z" fill="#E2E8F0" />
                    </svg>
                </div>
                {/* <div className="container mx-auto">
                    <div className="flex flex-wrap items-center xl:mx-28">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mx-auto -mt-32">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-guindaClaro">
                                <img alt="..." src="/images/retinaVitreo.png" className="w-full align-middle rounded-t-md " />
                                <blockquote className="relative p-8 mb-4">
                                    <svg className="absolute left-0 w-full block h-[95px] -top-20" viewBox="0 0 583 95" >
                                        <path d="M0,95L583,61V95H0Z" fill="#BF1B23" />
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        ¿Cuáles son las principales patologías que atiende esta subespecialidad?
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Las enfermedades de retina y vítreo son diversas y complejas. Quizás la más
                                        conocida sea el desprendimiento de retina (incluso, los trastornos causados por la diabetes).
                                        Pero lo cierto es que existen otras patologías, igual de delicadas, que comprenden a esta subespecialidad.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Retinopatía diabética</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Esta enfermedad es provocada por la diabetes, y causa el deterioro de los vasos sanguíneos del ojo. Esto provoca una especie de “engrosamiento” en la retina, dificultando la visión.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Retinopatía del prematuro
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Ocurre cuando crecen vasos sanguíneos anormales en la retina (la capa de tejido sensible a la luz ubicada en la
                                                parte de atrás del ojo).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Desprendimiento de retina</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                es un problema ocular que ocurre cuando la retina se separa de su posición normal en la parte de atrás del ojo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Degeneración macular relacionada con la edad</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Es una enfermedad ocular que puede nublar la visión central. Se presenta cuando el envejecimiento daña la mácula,
                                                la parte del ojo que controla la visión nítida frontal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 clasclassNames="text-xl mb-1 font-semibold">Edema macular</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                se produce cuando se acumula un exceso de líquido en la mácula, que provoca la irritación de la retina,
                                                pudiendo ocasionar visión borrosa o distorsión de las líneas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="justify-center text-center flex flex-wrap pt-16">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl text-guindaClaro">Servicios que ofrecemos en el departamento de Órbita</h2>
                    </div>
                </div>
                <div className="container mx-auto px-4 pb-32 pt-24">
                    <div className="items-center flex flex-wrap xl:mx-10">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
                                        <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />
                                        <rect x="6" y="16" width="12" height="4" rx="1" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-semibold text-guindaClaro">Tratamiento de enfermedades comunes</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    En este departamento tratamos:
                                </p>
                                <ul className="list-disc ml-4 mt-2">
                                    <li>Padecimientos de la órbita (cavidad donde se encuentra el ojo)</li>
                                    <li>Oftalmopatía tiroidea</li>
                                    <li>Tumores</li>
                                    <li>Fracturas</li>
                                    <li>Padecimientos de los párpados</li>
                                    <li>Cirugía cosmética</li>
                                    <li>Caída del párpado</li>
                                    <li>Obstrucción de vía lagrimal</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/enfermedadesComunes.png" />
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/CirujiaOrbita.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12 lg:mt-20">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Procedimientos Quirúrgicos</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Las principales cirugías que llevamos a cabo en el departamento son:
                                </p>
                                <ul className="list-disc ml-4 pt-2">
                                    <li>Extracción de tumores</li>
                                    <li>Reconstrucción de cavidad ocular</li>
                                    <li>Blefaroplastia</li>
                                    <li>Entropión y ectropión</li>
                                    <li>Fracturas de órbita</li>
                                    <li>Ptosis palpebral</li>
                                    <li>Cosmética palpebral</li>
                                    <li>Retracción palpebral</li>
                                    <li>Pterigión</li>
                                    <li>Evisceración/enucleación</li>
                                    <li>Orbitopatía tiroidea</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-48">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Estudios de diagnóstico</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Los principales estudios que realizamos son:
                                </p>
                                <ul className="list-disc pt-2 pl-3">
                                    <li>Biópsias de tejido – Estudio histopatológico</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/biopsia.png" />
                        </div>
                    </div>
                </div>
            </section>
        </Format>
    )
}

export default Orbita;