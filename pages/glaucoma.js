import Format from '../layout/format';

function Glaucoma() {
    return (
        <Format type="nav">
            <section className="header relative pt-16 items-center flex h-screen max-h-full">
                <div className="container mx-auto items-center flex flex-wrap xl:mx-28">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-guindaClaro">
                                ¿Qué es el departamento de Glaucoma?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                El departamento de Glaucoma tiene como objetivo principal el diagnóstico, prevención, y manejo de los pacientes con este cuadro patológico.
                                Actualmente se considera que el glaucoma está constituido en realidad por una serie de cuadros clínicos. Su principal factor de riesgo es
                                la presión ocular por arriba de las cifras normales.<br />
                                <br />
                                En la mayoría de los casos, el glaucoma se asocia a una presión dentro del ojo más alta de lo normal, una condición que se conoce como
                                hipertensión intraocular. De no ser tratado o controlado, el glaucoma provoca, en primera instancia, una pérdida de la visión periférica
                                y finalmente puede provocar ceguera.
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
                    <img className="svg1 absolute top-8 xs:mt-8 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full" src="./images/especialidades/glaucomaPortada.png" alt="..." />

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
                                <img alt="..." src="/images/glaucoma2.png" className="w-full align-middle rounded-t-md " />
                                <blockquote className="relative p-8 mb-4">
                                    <svg className="absolute left-0 w-full block h-[95px] -top-20" viewBox="0 0 583 95" >
                                        <path d="M0,95L583,61V95H0Z" fill="#BF1B23" />
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        ¿QUÉ ES EL GLAUCOMA?
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        El glaucoma es una afección de los ojos, que provoca la pérdida gradual de la visión,
                                        al causar daños severos en el nervio óptico. Puede generar pérdida de la visión gradual o
                                        ceguera, pero si se trata a tiempo, sus daños pueden atenuarse.
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
                                            <h6 className="text-xl mb-1 font-semibold">Glaucoma de ángulo abierto</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Representa el 90% de todos los casos de glaucoma, y es provocado por la obstrucción lenta de los canales
                                                de drenaje del ojo debido a un aumento de la presión ocular. Es una afección para toda la vida.
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
                                                Glaucoma de tensión normal (GTN)
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                En este caso, el nervio óptico se daña a pesar de que la presión ocular no es muy elevada.
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
                                            <h6 className="text-xl mb-1 font-semibold">Glaucoma de ángulo cerrado</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Es la forma menos frecuente de glaucoma, y es provocado por el bloqueo repentino de los canales de drenaje del ojo,
                                                que aumenta inesperadamente la presión intraocular. Requiere atención médica inmediata.
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
                                            <h6 className="text-xl mb-1 font-semibold">Glaucoma congénito</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Se trata de una enfermedad no frecuente, que puede ser heredada. Si no presenta complicaciones, puede corregirse con medicamentos y cirugía.
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
                                <h3 className="text-3xl font-semibold text-guindaClaro">Cirugía láser para glaucoma (ambulatorias)</h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Hay dos tipos principales de cirugía láser para tratar el glaucoma, que ayudan a drenar el humor acuoso del ojo.
                                    Estos procedimientos generalmente se consideran como cirugía ambulatoria.
                                </p>
                                <ul className="list-disc mt-2 ml-3">
                                    <li className="py-1">
                                        <h1 className="font-medium text-slate-700">Trabeculoplastia</h1>
                                        <p className="text-lg leading-relaxed mt-2">
                                            Esta cirugía es para personas que tienen glaucoma de ángulo abierto y se puede usar en lugar o, además, de los medicamentos.
                                            El cirujano usa un láser para hacer que el ángulo de drenaje funcione mejor. De esa manera, el líquido fluye correctamente y
                                            se reduce la presión ocular.
                                        </p>
                                    </li>
                                    <li className="py-1">
                                        <h1 className="font-medium text-slate-700">Iridotomía</h1>
                                        <p className="text-lg leading-relaxed mt-2">
                                            Esto es para personas que tienen glaucoma de ángulo cerrado. El oftalmólogo usa un láser para crear un pequeño orificio en el iris.
                                            Este orificio ayuda a que el líquido fluya hacia el ángulo de drenaje.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/ambulatorias.png" />
                        </div>
                    </div>

                    <div className="items-center flex flex-wrap xl:mx-10 pt-28">
                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img alt="..." className="max-w-full rounded-lg shadow-shadowRetina rotate-2 translate-y-16" src="/images/quirofanos.png" />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold text-guindaClaro">Cirugía para glaucoma (Quirófanos)</h3>
                                <ul className="list-disc mt-2 ml-3">
                                    <li className="py-1">
                                        <h1 className="font-medium text-slate-700">Trabeculectomía</h1>
                                        <p className="text-lg leading-relaxed mt-2">
                                            El Oftalmólogo crea un pequeño colgajo en la esclerótica, también creará una ampolla de filtración en la  conjuntiva.
                                            Por lo general, está oculto debajo del párpado superior y no se puede ver. El humor acuoso podrá salir del ojo a través
                                            del colgajo y entrar en la ampolla. En la ampolla, el tejido que rodea el ojo absorbe el líquido, lo que reduce la presión ocular.
                                        </p>
                                    </li>
                                    <li className="py-1">
                                        <h1 className="font-medium text-slate-700">Dispositivos de drenaje de glaucoma</h1>
                                        <p className="text-lg leading-relaxed mt-2">
                                            El Oftalmólogo implanta un pequeño tubo de drenaje en el ojo.  El implante de drenaje de glaucoma envía el líquido a
                                            un área de recolección (llamada reservorio). El oftalmólogo crea este depósito debajo de la conjuntiva. Luego, el
                                            líquido se absorbe en los vasos sanguíneos cercanos.
                                        </p>
                                    </li>
                                </ul>
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
                                        <p className="text-xl text-white mt-2 font-semibold">Medicamentos</p>
                                        <h1 className='text-white pt-3 font-sans text-[16px]'>
                                            Sea en forma de gotas oculares, o de pastillas, es una de las formas que se emplea para tratar
                                            esta enfermedad. Es importante consultar a un oftalmólogo, pues las prescripciones e indicaciones
                                            médicas correctas son fundamentales para tener éxito en los resultados.
                                        </h1>
                                    </div>
                                </a>
                                <a href="" target="">
                                    <div className="bg-[#217ED1] shadow-lg rounded-lg text-center p-8 mt-8">
                                        <p className="text-xl text-white mt-2 font-semibold">Otros posibles tratamientos</p>
                                        <h1 className='text-white pt-3 font-sans text-[16px]'>
                                            Para corregir el glaucoma son la Trabeculectomía, Iridotimía con Láser, Endociclofotocoagulación (ECP),
                                            el Microshunts, válvulas grandes, válvulas pequeñas y la Cirugía de Glaucoma mínimamente invasiva con dispositivos de derivación.
                                        </h1>
                                    </div>
                                </a>
                            </div>
                            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                <a href="" target="">
                                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                        <p className="text-lg text-white mt-4 font-semibold">Trabeculoplastia con láser</p>
                                        <h1 className='text-white pt-3 font-sans text-[16px]'>
                                            La cirugía láser, o trabeculoplastia con láser, es uno de los métodos empleados, pues ayuda a que drene el líquido del ojo,
                                            disminuyendo los efectos de la presión ocular.
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
                            ¿Cuales son los tratamientos?
                        </h3>
                        <p className="text-lg font-normal leading-relaxed mt-4 mb-4 text-slate-600 font-sans">
                            El glaucoma es una enfermedad que no tiene cura. Sin embargo, existen tratamientos que pueden ayudar a disminuir los daños que causa.
                            Si bien la vista perdida no se recupera, actuar a tiempo puede contribuir a preservar la visión restante, y a elevar la calidad de vida
                            de los pacientes.
                        </p>
                        <p className="text-lg font-normal leading-relaxed mt-4 mb-4 text-slate-600 font-sans">
                            Algunos de los tratamientos más comunes son:
                        </p>
                    </div>
                </div>
            </section>
        </Format>
    )
}

export default Glaucoma;