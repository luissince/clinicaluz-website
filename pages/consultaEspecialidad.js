import Format from '../layout/format';

function ConsultaEspecialidad() {
    return (
        <Format type="nav">
            <section className="header relative pt-16 items-center flex h-screen max-h-full">
                <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-guindaClaro">
                                ¿Qué es el departamento de Consulta de Especialidad (primera vez)?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                En la Consulta de Especialidad se brinda un estudio oftalmológico integral, y se elabora una historia clínica completa, a
                                veces recurriendo a estudios clínicos y, en su caso, análisis de laboratorio o estudios de gabinete con tecnología de punta.
                                Una vez diagnosticado el cuadro, permite al médico decidir si el paciente requiere ser atendido en un departamento de alta especialidad.
                                En este departamento también se manejan los casos de atención prioritaria (urgencias) las 24 horas del día y procedimientos oculares sencillos.
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
                    <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/especialidades/consultaEspecialidad.png" alt="..." />

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
                <div className="justify-center text-center flex flex-wrap pt-16">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl text-guindaClaro">Servicios que ofrecemos en el departamento de Consulta de Especialidad</h2>
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
                                <h3 className="text-3xl font-semibold text-guindaClaro">Procedimiento de la consulta</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Los pasos que realizamos en la consulta de primera vez son:
                                </p>
                                <ul className="list-disc ml-3 mt-2">
                                    <li>Examen de refracción</li>
                                    <li>Examen Oftalmológico</li>
                                    <li>Exploración del segmento anterior</li>
                                    <li>Toma de presión ocular</li>
                                    <li>Exploración de fondo de ojo</li>
                                    <li>Exploración estrabológica y reflejos pupilares</li>
                                    <li>Exploración de párpados, órbita y vías lagrimales</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/procedimientosConsulta.png" />
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/padecimientos.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Padecimientos que atendemos</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Los padecimientos que atendemos directamente en este departamento son:
                                </p>
                                <ul className="list-disc ml-3 mt-2">
                                    <li>Conjuntivitis</li>
                                    <li>Pterigiones</li>
                                    <li>Chalaziones</li>
                                    <li>Orzuelos (perrillas)</li>
                                    <li>Trauma ocular</li>
                                    <li>Ametropias</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </Format>
    )
}

export default ConsultaEspecialidad;