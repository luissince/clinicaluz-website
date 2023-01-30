import Format from '../layout/format';

function Cornea() {
    return (
        <Format type="nav">
            <section className="header relative pt-16 items-center flex h-screen max-h-full">
                <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-guindaClaro">
                                Cornea
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Este departamento se encarga de diagnosticar y tratar las diferentes patologías que afectan la córnea.
                                Entre las más comunes encontramos errores refractivos, queratocono, conjuntivitis, ojo seco e infecciones.
                                <br />
                                La córnea es la ventana transparente en forma de cúpula que se encuentra en la parte frontal del ojo.
                                Enfoca la luz en él y es afectada por los problemas de la superficie ocular.
                                <br />
                                Para tener buena visión, la córnea debe ser transparente. Si tiene cicatrices, está hinchada o dañada, la luz no se enfocará
                                correctamente en el ojo. Por consiguiente, la visión es borrosa.
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
                    <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/especialidades/cornea.png" alt="..." />

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
                                <img alt="..." src="/images/queratitis.png" className="w-full align-middle rounded-t-md " />
                                <blockquote className="relative p-8 mb-4">
                                    <svg className="absolute left-0 w-full block h-[95px] -top-20" viewBox="0 0 583 95" >
                                        <path d="M0,95L583,61V95H0Z" fill="#BF1B23" />
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        ¿que es la queratitis?
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Enfermedades como la queratitis, úlceras bacterianas o virales y ojo seco, son tratadas con medicamentos y
                                        si estos no producen el resultado deseado, se recurre al tratamiento quirúrgico correspondiente.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap w-full">
                                <div className="w-full md:w-full">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <svg fill="none" stroke="#BF1B23" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-xl mb-1 font-semibold pl-4">
                                                Tratamiento de enfermedades comunes
                                            </span>
                                            <div>
                                                <h6 className="text-base mb-1 font-semibold text-slate-800">
                                                    Los padecimientos más comunes que se atienden en el departamento de Córnea son:
                                                </h6>
                                                <ul className="list-disc ml-3">
                                                    <li>Errores refractivos (Miopía, Hipermetropía, Astigmatismo)</li>
                                                    <li>Ectasias Corneales</li>
                                                    <li>Queratitis</li>
                                                    <li>Ojo seco</li>
                                                    <li>Infecciones y úlceras.</li>
                                                </ul>
                                                <p className="mb-4 text-blueGray-500 mt-2">
                                                    Esta enfermedad es provocada por la diabetes, y causa el deterioro de los vasos sanguíneos del ojo. Esto provoca una especie de “engrosamiento” en la retina, dificultando la visión.
                                                </p>
                                            </div>
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
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                            Nuestros quirófanos están equipados con tecnología de punta que nos permite realizar todos los procedimientos relacionados con las patologías de la cornea.
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
                                <h3 className="text-3xl font-semibold text-guindaClaro">Trasplante de córnea</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Cuando la córnea pierde su transparencia causa desde visión borrosa hasta la incapacidad visual en el paciente.
                                    En estos casos se recurre a un procedimiento quirúrgico llamado trasplante de córnea, su oftalmólogo le recomendará un trasplante
                                    cuando la córnea no se puede curar o reparar. Mediante este procedimiento se reemplaza la córnea enferma por una córnea transparente y
                                    saludable de un donante humano.
                                </p>
                                <h3 className="text-xl font-semibold text-slate-800">Trasplante de córnea de espesor total</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Queratoplastia penetrante o QPP: Se utiliza cuando todas las capas de la córnea están dañadas y se reemplaza el espesor total
                                    de la córnea
                                </p>
                                <h3 className="text-xl font-semibold text-slate-800">Trasplante de córnea de espesor parcial</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    * Queratoplastia Lamelar Anterior Profunda o QLAP: se utiliza cuando las capas superficiales están dañadas, generalmente se
                                    utiliza para tratar el queratocono o cicatrices superficiales.

                                    * Queratoplastia endotelial: Se utiliza cuando la capa más interna de la córnea llamada “endotelio” ha sufrido daño, por enfermedades,
                                    inflamación o trauma.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/corneaTransplante.png" />
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/lasik.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Cirugía refractiva (LASIK)</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Cuando la curvatura de la córnea o el tamaño del ojo no son adecuados, la luz no se enfoca correctamente en el ojo y se produce una
                                    visión deficiente. Para corregir estas irregularidades en la córnea se realiza un procedimiento llamado “Cirugía Refractiva
                                    LASIK (Laser-Assisted in Situ Keratomileusis)” que es un método para corregir su visión.<br />
                                    <br />
                                    El objetivo del LASIK es corregir el error refractivo para mejorar la visión. El LASIK puede disminuir la necesidad de anteojos o lentes de contacto.
                                    En algunos casos, incluso puede permitirle prescindir completamente de ellos. Cuando se realiza un procedimiento LASIK, el oftalmólogo
                                    utiliza un láser para cambiar la forma de la córnea. Esto mejora la manera en que los rayos de luz se enfocan sobre la retina. El LASIK se utiliza para
                                    tratar la miopía, la hipermetropía y el astigmatismo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-48">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">PRK</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    La PRK es un tipo de cirugía refractiva para corregir defectos tales como Miopía, Hipermetropía y Astigmatismo.
                                    <br />
                                    En la cirugía PRK, el epitelio de la córnea es removido para luego aplicar el láser directamente desde la superficie.
                                    En cambio, en la cirugía refractiva LASIK se remueve parcialmente una capa superior de la córnea para aplicar el
                                    tratamiento por debajo y la capa se repone luego sin suturas. En ambos casos, una vez expuesta la córnea, esta se modela
                                    con láser excimer para revertir el defecto refractivo deseado. Es ideal en personas con córneas delgadas.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/prk.png" />
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/smile.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">SMILE</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    SMILE (extracción lenticular por incisión pequeña) es una cirugía de corrección de la visión con láser similar al LASIK.
                                    <br />
                                    La cirugía ocular con láser SMILE se realiza utilizando un láser de femtosegundo VisuMax, que es una tecnología patentada de Carl
                                    Zeiss Meditec.
                                    <br />
                                    En el procedimiento SMILE, el cirujano utiliza un láser de femtosegundo para crear un pequeño trozo de tejido en forma de lente
                                    (lentículo) dentro de la córnea. Luego, con el mismo láser, se realiza una pequeña incisión en forma de arco en la superficie de la
                                    córnea y el cirujano extrae el lentículo a través de esta incisión y la desecha.
                                    <br />
                                    Con el pequeño lentículo retirada, la forma de la córnea queda alterada, corrigiéndose así la miopía. La incisión de la córnea
                                    cicatriza en unos pocos días sin puntos de sutura y la visión se vuelve más nítida muy rápidamente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-48">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Crosslinking</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Tratamiento en el que se utiliza una combinación de luz ultravioleta (UVA) y gotas oftálmicas de riboflavina, con el 
                                    fin de fortalecer la córnea afectada por enfermedades ectásicas corneales como el queratocono.
                                    <br/>
                                    * Anillos intracorneales:
                                    Son implantes de material biocompatible y transparente los cuales se introducen en el centro de la córnea o estroma.
                                    <br/>
                                    Con ello se consigue reducir las aberraciones producidas por el queratocono y regularizar la superficie corneal mejorando 
                                    la visión del paciente.
                                    <br/>
                                    Una de las principales ventajas de su implantación en el ojo del paciente es evitar recurrir a la cirugía mediante 
                                    trasplante de córnea.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/crosslinking.png" />
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-wrap items-center  xl:mx-28">
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
                </div> */}
            </section>
        </Format>
    )
}

export default Cornea;