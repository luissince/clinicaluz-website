import Format from '../layout/format';

function EnfermedadesOculares() {
    return (
        <Format type="nav">
            <section className="header relative pt-16 items-center flex h-screen max-h-full">
                <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-guindaClaro">
                                ¿Qué es el departamento de Enfermedades inflamatorias oculares?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                En este departamento tratamos a todos aquellos pacientes que tengan algún tipo de inflamación, ya sea dentro de la
                                superficie ocular o al interior del ojo. Estas inflamaciones pueden ser de origen traumático, infeccioso, autoinmune y,
                                en algunas ocasiones, neoplásico.<br />
                                <br />
                                La inflamación ocular agrupa a diferentes enfermedades y puede llegar a producir un daño irreversible de la función ocular y las
                                estructuras anexas al globo ocular que puede causar ceguera total.
                            </p>
                            <div className="mt-12">
                                <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-guindaOscuro active:bg-guindaClaro uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                    Agenda una cita
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/especialidades/problemasOculares.png" alt="..." />

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
                                <img alt="..." src="/images/uveitis.png" className="w-full align-middle rounded-t-md " />
                                <blockquote className="relative p-8 mb-4">
                                    <svg className="absolute left-0 w-full block h-[95px] -top-20" viewBox="0 0 583 95" >
                                        <path d="M0,95L583,61V95H0Z" fill="#BF1B23" />
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        ¿Qué es la Uveítis?
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        La uveítis ocurre cuando la capa media del globo ocular se inflama (enrojece e hincha). Esta capa, llamada úvea,
                                        tiene muchos vasos sanguíneos que nutren el ojo. La uveítis puede dañar el tejido ocular vital y provocar una pérdida
                                        permanente de la visión.
                                        Es más probable que tenga uveítis si tiene o ha tenido:
                                        <br />
                                    </p>
                                    <ul className="list-disc ml-3 mt-2 text-md font-light text-white">
                                        <li>Infecciones virales como herpes simple, sífilis, la enfermedad de Lyme, o parásitos como la toxoplasmosis.</li>
                                        <li>Una enfermedad inflamatoria sistémica como enfermedad inflamatoria intestinal (EII), artritis reumatoide o lupus.</li>
                                        <li>Una herida en el ojo.</li>
                                        <li>Fumar (cigarrillos, puros o pipas) también aumenta el riesgo de contraer uveí.</li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-full px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-xl mb-1 font-semibold pl-4">Tratamiento de enfermedades comunes</span>
                                            <h6 className="text-lg mb-1 font-semibold text-slate-700">En este departamento tratamos:</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Uveítis
                                            </p>
                                            <ul className="list-disc ml-3 mt-2">
                                                <li>Anterior</li>
                                                <li>Intermedia</li>
                                                <li>Posterior</li>
                                            </ul>
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

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28 sm:pt-2">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 lg:translate-y-20 sm:-translate-y-6" src="/images/catarata2.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Catarata</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Una catarata es un área nublada en el cristalino (el “lente” de su ojo). Las cataratas son muy comunes a medida que envejecemos.
                                    En efecto, más de la mitad de todos los estadounidenses de 80 años o más tiene cataratas o ha tenido cirugía para eliminarlas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto overflow-hidden pb-20">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
                                    <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />
                                    <rect x="6" y="16" width="12" height="4" rx="1" />
                                </svg>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Los principales estudios que realizamos son:
                            </h3>
                            <ul className="list-disc ml-3 mt-2">
                                <li>Tonometría</li>
                                <li>Exploración con lámpara de hendidura</li>
                                <li>Oftalmoscopia</li>
                                <li>Fotografías de fondo de ojo</li>
                                <li>Tomografía de coherencia óptica</li>
                                <li>Angiografía con fluoresceína</li>
                            </ul>
                        </div>

                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                                <img alt="..." src="/images/oftalmoscopia.png" className="w-full align-middle rounded-lg absolute shadow-lg max-w-[210px] left-64 -top-40" />
                                <img alt="..." src="/images/tonometria.png" className="w-full align-middle rounded-lg absolute shadow-lg max-w-[180px] left-10 -top-56 z-[2]" />
                                <img alt="..." src="/images/angiografia.png" className="w-full align-middle rounded-lg absolute shadow-2xl max-w-[200px] -left-12 top-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Format>
    )
}

export default EnfermedadesOculares;