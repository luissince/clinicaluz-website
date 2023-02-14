import Format from '../layout/format';

function Estrabismo() {
    return (
        <Format type="nav">
            <section className="header relative pt-16 items-center flex h-screen max-h-full">
                <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-guindaClaro">
                                Estrabismo
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Este departamento se encarga de tratar casos con estrabismo, una compleja patología que se genera por desviaciones anormales de los ojos,
                                ya sea horizontales convergentes o divergentes o verticales, que se deben al desbalance en las funciones de los músculos extraoculares,
                                encargados de los movimientos armónicos de los globos oculares.<br />
                                <br />
                                Un estrabismo plantea diferentes problemas: la pérdida de la función binocular, la reducción de la visión del ojo desviado (ambliopía u
                                ojo vago) y el aspecto estético desfavorable. También se produce una alteración en la visión en relieve 3D y en la visión de precisión.
                                Es por eso que es importante tratar el estrabismo, sobre todo en una edad temprana.
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
                    <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/especialidades/estrabismo.png" alt="..." />

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
                                <img alt="..." src="/images/estrabismo2.png" className="w-full align-middle rounded-t-md " />
                                <blockquote className="relative p-8 mb-4">
                                    <svg className="absolute left-0 w-full block h-[95px] -top-20" viewBox="0 0 583 95" >
                                        <path d="M0,95L583,61V95H0Z" fill="#BF1B23" />
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        ¿Que causa el estrabismo?
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        El estrabismo del adulto puede surgir de repente como consecuencia de otras enfermedades del paciente,
                                        como la diabetes mellitus o tipo II, la enfermedad de Graves o por traumatismos cefálicos, entre otros.
                                        Ocasionalmente, también puede surgir como consecuencia de cirugías oculares o de los músculos que rodean el ojo.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-full px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <h1 className="text-2xl mb-1 font-semibold">Tratamiento de enfermedades comunes</h1>
                                        <p className="text-base mb-1 font-semibold text-slate-600">Los diferentes tipos de estrabismo que tratamos son:</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Esotropia o endotropia</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                La esotropía o endotropía asociada a la edad (ETAE) es la pérdida del paralelismo entre los ejes de los ojos y el objeto de fijación
                                                que se produce en adultos de más de 65 años. Las personas afectadas por esta patología desvían involuntariamente uno o ambos ojos hacia la nariz.
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
                                                Exotropia
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                La exotropía es la alteración del aparato oculomotor caracterizada por la desviación hacia afuera de un eje ocular, en relación con la
                                                posición que adopta el otro al fijar un objeto.
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
                                            <h6 className="text-xl mb-1 font-semibold">Hipotropia</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Pérdida del paralelismo ocular en que el ojo no fijador se desvía hacia abajo. Se engloba dentro del grupo de los estrabismos.
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
                                            <h6 className="text-xl mb-1 font-semibold">Hipertropia</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                La hipermetropía (también llamada hiperopía) es un error de refracción que hace que los objetos cercanos se vean borrosos.
                                                Se presenta cuando la forma del ojo hace que la luz se enfoque por detrás de la retina (una capa de tejido sensible a la luz en la parte de atrás del ojo)
                                                en lugar de directamente en la retina.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-full px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Parálisis de los nervios oculomotores</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Las parálisis oculomotoras, que condicionan los llamados estrabismos paralíticos, se caracterizan por la imposibilidad o dificultad para
                                                realizar uno o varios movimientos oculares, a causa de una mala función o afectación del músculo o músculosresponsables de llevar a cabo estas acciones.
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
                                <h3 className="text-3xl font-semibold text-guindaClaro">Cirugía de estrabismo</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    La cirugía suele realizarse ambulatoriamente en un hospital o centro quirúrgico, con anestesia general o local.
                                    Su oftalmólogo hace un pequeño corte en el tejido que recubre el ojo para llegar a los músculos del ojo. Luego,
                                    se vuelven a posicionar los músculos para ayudar a los ojos a apuntar en la misma dirección. Esto se puede hacer en un ojo
                                    o en ambos. Después de la cirugía de estrabismo, podrá volver a su rutina diaria en unos días.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/cirujiaEstrabismo.png" />
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/botulinica.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Aplicación de toxina botulínica</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    La toxina botulínica se utiliza predominantemente en estética, pero para los ojos también se utiliza, y además como tratamiento
                                    definitivo. Cuando un paciente tiene los ojos desviados, es porque uno de los dos músculos que mueven el ojo, tira más que el otro.
                                    <br />
                                    Lo que se hace es poner una inyección en ese músculo que es más fuerte, no es en el ojo, si no en la parte que esta por fuera.
                                    Es un tratamiento que son 20 segundos, y que no duele. A los 4 días empieza a hacer efecto, se afloja ese músculo y, durante tres
                                    meses, tenemos el músculo que antes era fuerte, lo tenemos flojo, y el otro va a estar haciendo ejercicios. De tal manera, que cuando
                                    se pase totalmente el efecto, y esto es una parte muy buena, porque no va a producir efectos perjudiciales a largo plazo, el músculo de
                                    fuera que ha estado reforzándose, va a tirar más, y en muchos casos, vamos a conseguir que los ojos estén rectos solo con una inyección
                                    que además en el adulto se pone con anestesia con gotas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center  xl:mx-28">
                    <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                        <div className="justify-center flex flex-wrap relative">
                            <div className="my-4 w-full lg:w-6/12 px-4">
                                <a href="" target="">
                                    <div className="bg-guindaClaro shadow-lg rounded-lg text-center px-8 py-3">
                                        <p className="text-xl text-white mt-2 font-semibold">Refracción con cicloplejia mediante retinoscopia</p>
                                    </div>
                                </a>
                                <a href="" target="">
                                    <div className="bg-[#217ED1] shadow-lg rounded-lg text-center p-8 mt-8">
                                        <p className="text-lg text-white mt-4 font-semibold">Estrabogramas</p>
                                    </div>
                                </a>
                                <a href="" target="">
                                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                        <p className="text-lg text-white mt-4 font-semibold">Esteroagudeza</p>
                                    </div>
                                </a>
                            </div>
                            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                <a href="" target="">
                                    <div className="bg-green-500 shadow-lg rounded-lg text-center p-8">
                                        <p className="text-lg text-white mt-4 font-semibold">Pantallas de visión</p>
                                    </div>
                                </a>
                                <a href="" target="">
                                    <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                        <p className="text-lg text-white mt-4 font-semibold">Exploración de diplopía</p>
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
        </Format>
    )
}

export default Estrabismo;