import Format from '../layout/format';

function Retina() {
    return (
        <Format type="nav">
            <>
                <section className="header relative pt-16 items-center flex h-screen max-h-full">
                    <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <h2 className="font-semibold text-4xl text-guindaClaro">
                                    Retina y Vítreo
                                </h2>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Retina y Vítreo son dos componentes visuales que guardan una relación estrecha, para el correcto funcionamiento de la vista.
                                    <br />
                                    La retina es el tejido natural que recubre como un protector la superficie interior del ojo. Funciona captando las imágenes que
                                    podemos refractar de la luz, por lo que cualquier patología que la afecte, puede generar en un problema visual muy delicado.
                                    <br />
                                    Por su parte, el humor vítreo es el líquido que rellena el espacio comprendido entre la retina y la cara posterior del cristalino.
                                    Está compuesto en un 99% de agua, y su función es mantener a la retina en un estado perfecto, para que de esta forma pueda reproducir las imágenes con claridad y precisión.
                                </p>
                                <div className="mt-12">
                                    <a href="" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-guindaOscuro active:bg-guindaClaro uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                        Agenda una cita
                                    </a>
                                    {/* <a href="https://github.com/creativetimofficial/notus-js?ref=njs-index" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">
                                        Github Star
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/docencia/retina.png" alt="..." />

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
                    <div className="container mx-auto">
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
                    </div>
                    <div className="justify-center text-center flex flex-wrap mt-24">
                        <div className="w-full md:w-6/12 px-12 md:px-4">
                            <h2 className="font-semibold text-4xl text-guindaClaro">Procedimientos Quirúrgicos</h2>
                            <p className="text-2xl leading-relaxed mt-4 mb-4 text-slate-600 ">
                                Cirugía de vítreo y retina
                            </p>
                            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                                Nuestros quirófanos están equipados con tecnología de punta que nos permite realizar todos los procedimientos relacionados con las patologías de la retina.
                            </p>
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
                                    <h3 className="text-3xl font-semibold text-guindaClaro">Vitrectomía</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        La vitrectomía es un tipo de cirugía ocular que se utiliza para tratar los problemas de la retina y el humor vítreo.
                                        Durante la vitrectomía, el oftalmólogo extrae una parte o la totalidad del humor  vítreo de la parte media del ojo.
                                        El humor vítreo se reemplaza por una solución de agua salada (salina), o por una burbuja de gas, o de aceite de silicón.<br />
                                        <br />
                                        En esta cirugía el oftalmólogo puede:<br />
                                        <br />
                                    </p>
                                    <ul className="list-disc ">
                                        <li className="py-1">
                                            <h4 className="text-blueGray-500">
                                                Quitar sangre u otra sustancia que impida que la luz se enfoque correctamente en la retina.
                                            </h4>
                                        </li>
                                        <li className="py-1">
                                            <h4 className="text-blueGray-500">
                                                Extraer tejido cicatricial que arrugue o desgarre la retina, y de esta manera produzca visión deficiente.
                                            </h4>
                                        </li>
                                        <li className="py-1">
                                            <h4 className="text-blueGray-500">
                                                Ayudar a reparar el desprendimiento (separación) de la retina de la pared del ojo.
                                            </h4>
                                        </li>
                                        <li className="py-1">
                                            <h4 className="text-blueGray-500">
                                                Extraer un objeto extraño que haya quedado en el interior del ojo como resultado de un trauma.
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                                <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/vitrectomia.png" />
                            </div>
                        </div>

                        <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                                <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/antiangiogenicos.png" />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold text-guindaClaro">Aplicación de inyecciones intravitreas</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Es una inyección de medicamento en el ojo. El interior del ojo está lleno de un líquido gelatinoso (humor vítreo).
                                        Durante este procedimiento, se inyecta medicamento en el humor vítreo, cerca de la retina, en la parte posterior del ojo.
                                        El medicamento puede tratar ciertos problemas oculares y ayudar a proteger su visión. Este método casi siempre se usa para
                                        administrar un nivel más alto de medicamento a la retina.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="items-center flex flex-wrap xl:mx-10 pt-48">
                            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold text-guindaClaro">Aplicación de inyecciones intravitreas</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Es una inyección de medicamento en el ojo. El interior del ojo está lleno de un líquido gelatinoso (humor vítreo).
                                        Durante este procedimiento, se inyecta medicamento en el humor vítreo, cerca de la retina, en la parte posterior del ojo.
                                        El medicamento puede tratar ciertos problemas oculares y ayudar a proteger su visión. Este método casi siempre se usa para
                                        administrar un nivel más alto de medicamento a la retina.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                                <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/antiangiogenicos.png" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center  xl:mx-28">
                        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                            <div className="justify-center flex flex-wrap relative">
                                <div className="my-4 w-full lg:w-6/12 px-4">
                                    <a href="" target="">
                                        <div className="bg-guindaClaro shadow-lg rounded-lg text-center px-8 py-3">
                                            <p className="text-xl text-white mt-2 font-semibold">Estudios de electrofisiología</p>
                                            <h1 className='text-white pt-3 font-sans text-[16px]'>
                                                Es el estudio de los potenciales eléctricos de las células y tejidos de la retina.
                                                El examen electrofisiológico consiste en evaluar la función de la vía visual desde los fotoreceptores (bastones y conos) de
                                                la retina hasta la corteza visual del cerebro.
                                            </h1>
                                        </div>
                                    </a>
                                    <a href="" target="">
                                        <div className="bg-[#217ED1] shadow-lg rounded-lg text-center p-8 mt-8">
                                            <p className="text-lg text-white mt-4 font-semibold">Tomografía de coherencia óptica (OCT) de retina</p>
                                            <h1 className='text-white pt-3 font-sans text-[16px]'>
                                                Con la OCT, podemos ver cada una de las diferentes capas que forman la retina. Esto nos permite hacer un diagrama y
                                                medir su grosor. Estas medidas ayudan a determinar el diagnóstico. También proveen orientación sobre el tratamiento
                                                del glaucoma y enfermedades de la retina. Estas enfermedades de la retina incluyen la degeneración macular relacionada
                                                con la edad (DMRE) y la enfermedad ocular diacética.
                                            </h1>
                                        </div>
                                    </a>
                                </div>
                                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                    <a href="" target="">
                                        <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                            <p className="text-lg text-white mt-4 font-semibold">Angiografía de retina con fluoresceína</p>
                                            <h1 className='text-white pt-3 font-sans text-[16px]'>
                                                Es un examen ocular en el que se usa un tinte y una cámara especiales para examinar el flujo sanguíneo en la retina y
                                                la coroides. Estas son las dos capas en la parte posterior del ojo.
                                            </h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <svg className="h-8 w-8 text-red-500 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
                                    <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />
                                    <rect x="6" y="16" width="12" height="4" rx="1" />
                                </svg>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal font-sans">
                                Estudios de diagnóstico
                            </h3>
                            <p className="text-lg font-normal leading-relaxed mt-4 mb-4 text-slate-600 font-sans">
                                Los estudios de pruebas diagnósticas tienen como objetivos principales: evaluar la capacidad de discriminación de una prueba para establecer el
                                diagnóstico de enfermedad o el estado de avance de la misma, y estimar el efecto del uso del test sobre el manejo clínico y el pronóstico final de
                                los pacientes.
                            </p>
                            <p className="text-lg font-normal leading-relaxed mt-4 mb-4 text-slate-600 font-sans">
                                Los principales estudios que realizamos son:
                            </p>
                        </div>
                    </div>
                </section>


            </>
        </Format>
    )
}

export default Retina;