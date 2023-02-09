import Format from '../layout/format';

function FellowSegmentoAnterior() {
    return (
        <Format type="nav">
            <section>
                <div className="bg-bottom bg-cover bg-no-repeat w-full h-full bg-[url('/images/fondoFellowShip.png')]">
                    {/* Header */}
                    <div className="container mx-auto px-4 pt-32 sm:pt-44 md:pt-20 flex flex-col lg:flex-row justify-start lg:justify-between items-center">
                        <div className="lg:w-2/5 text-center  lg:text-left md:pt-10">
                            <h1 className="font-medium text-white text-4xl lg:text-5xl xl:text-6xl tracking-tight">
                                FellowShip <br /> Segmento Anterior</h1>
                            <p className="font-light text-white text-lg lg:text-2xl xl:text-3xl tracking-wider leading-tight pt-5">
                                El área médica de córnea y segmento anterior trata las enfermedades y condiciones de salud de la córnea, el cristalino y
                                la conjuntiva
                            </p>
                            <a href="/docencia" className="w-full py-4 md:py-5 px-8 lg:px-10 bg-white font-medium text-guindaOscuro hover:text-guindaClaro text-base lg:text-xl tracking-wider uppercase rounded-full text-center inline-block mt-6 lg:mt-10 shadow-md hover:shadow transition duration-300 border border-white hover:border-guindaClaro">
                                Volver a Docencia
                            </a>
                        </div>
                        <div className="w-full sm:w-5/6 lg:w-1/2 mt-10">
                            <img src="/images/illustration.svg" alt="hero illustration" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="relative pt-20">
                    <div className="bg-cover bg-center bg-no-repeat w-[32rem] h-[32rem] absolute top-0 left-0 -ml-56 mt-32 bg-[url('/images/blog-ellipse.svg')]">
                    </div>
                    <div className="container pb-16 lg:pb-24  relative mx-auto">
                        <div className="text-center">
                            <h4 className="font-medium text-guindaClaro text-xl md:text-3xl uppercase">
                                Acerca de la clase
                            </h4>
                            <h2 className="font-bold text-guindaClaro text-5x1 sm:text-5x1 lg:text-7xl tracking-wider">
                                Conoce más sobre el FellowShip
                            </h2>
                            <div className="pt-4 md:pt-6">
                                <img src="/images/underline-red.svg" className="mx-auto" alt="underline" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 pt-10">

                            <div className="px-3 py-8 text-center rounded-lg">
                                <div className="w-20 lg:w-24 h-20 lg:h-24 mx-auto">
                                    <img src="/images/objetivo.svg" alt="icon responsive" />
                                </div>
                                <h3 className="font-semibold text-slate-600 text-3xl tracking-wide pt-2 block">
                                    Objetivo General
                                </h3>
                                <p className="text-slate-600 text-xl leading-relaxed pt-6">
                                    Formar un oftalmólogo con las competencias clínicas y quirúrgicas que le faciliten realizar una cirugía de catarata de excelente calidad.
                                </p>
                            </div>

                            <div className="px-3 py-8 text-center rounded-lg ">
                                <div className="w-20 lg:w-24 h-20 lg:h-24 mx-auto">
                                    <img src="/images/calendario.svg" alt="icon responsive" />
                                </div>
                                <h3 className="font-semibold text-slate-600 text-3xl tracking-wide pt-2 block">
                                    Duración
                                </h3>
                                <p className="text-slate-600 text-xl leading-relaxed pt-6 font-bold">
                                    1 año y 3 meses
                                </p>
                                <div className="mx-auto ml-10">
                                    <ul className="list-disc text-xl text-slate-600 text-left leading-relaxed  ">
                                        <li>12 meses segmento anterior</li>
                                        <li>1 mes córnea</li>
                                        <li>1 mes Glaucoma</li>
                                        <li>1 mes retina</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="px-3 py-8 text-center rounded-lg">
                                <div className="w-20 lg:w-24 h-20 lg:h-24 mx-auto">
                                    <img src="/images/numeroCirugias.svg" alt="icon responsive" />
                                </div>
                                <h3 className="font-semibold text-slate-600 text-3xl tracking-wide pt-2 block">
                                    Número de Cirugías
                                </h3>
                                <p className="text-slate-600 text-xl leading-relaxed pt-6">
                                    150 a 300 cirugías de cataratas por facoemulsificación
                                </p>
                            </div>

                            <div className="px-3 py-8 text-center rounded-lg">
                                <div className="w-20 lg:w-24 h-20 lg:h-24 mx-auto">
                                    <img src="/images/jornada.svg" alt="icon responsive" />
                                </div>
                                <h3 className="font-semibold text-slate-600 text-3xl tracking-wide pt-2 block">
                                    Duración y horario de las jornadas
                                </h3>
                                <p className="text-slate-600 text-xl leading-relaxed pt-6">
                                    Dedicación presencial, exclusivo y de tiempo completo.<br />
                                    <span className="font-bold">Actividad práctica:</span> Lunes a sábado 7:00 am hasta las 6:00 pm<br />
                                    <span className="font-bold">Actividad académica:</span>  Miércoles 6:45 am a 7:45 am / Viernes 12:00 pm a 2:00 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* pie de pagina */}
                <div className="relative mx-20 ">
                    <div className="mx-auto text-center">
                        <h2 className="font-display text-4xl font-medium tracking-tighter text-guindaClaro sm:text-5xl">
                            Dirección y Coordinación
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:mb-16 sm:gap-y-16 lg:mt-24 lg:mb-24 lg:grid-cols-4 mx-auto">
                        <div className="mx-auto text-center">
                            <div className="group relative h-[20rem] w-[20rem] transform overflow-hidden rounded-full border-8 border-slate-100">
                                <div className="absolute inset-0">
                                    <img alt=""
                                        src="/images/Doctores/Doctor1.png"
                                        sizes="(min-width: 560px) 17.5rem, (min-width: 560px) 25vw, (min-width: 560px) 33vw, (min-width: 560px) 50vw, 100vw"
                                        width="560" height="560"
                                        decoding="async" data-nimg="1"
                                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                </div>
                            </div>
                            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Sanchez Cueva Sergio Alfredo</h3>
                            <p className="mt-1 text-base tracking-tight text-slate-500">Director Medico</p>
                        </div>

                        <div className="mx-auto text-center">
                            <div className="group relative h-[20rem] w-[20rem] transform overflow-hidden rounded-full border-8 border-slate-100">
                                <div className="absolute inset-0">
                                    <img alt=""
                                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        src="/images/Doctores/Doctor2.png"
                                        width="1120" height="560"
                                        decoding="async" data-nimg="1"
                                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                </div>
                            </div>
                            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Silva Cayatopa Fermin</h3>
                            <p className="mt-1 text-base tracking-tight text-slate-500">Presidente Del Comite Academico</p>
                        </div>

                        <div className="mx-auto text-center">
                            <div className="group relative h-[20rem] w-[20rem] transform overflow-hidden rounded-full border-8 border-slate-100">
                                <div className="absolute inset-0 svg3">
                                    <img alt=""
                                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        src="/images/Doctores/Doctor3.png"
                                        width="1120" height="560"
                                        decoding="async" data-nimg="1"
                                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                </div>
                            </div>
                            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Viaña Pongo Victor Raul</h3>
                            <p className="mt-1 text-base tracking-tight text-slate-500">Jefe Del Departamento De Segmento Anterior, Cornea Y Cirugia Refractiva</p>
                        </div>

                        <div className="mx-auto text-center">
                            <div className="group relative h-[20rem] w-[20rem] transform overflow-hidden rounded-full border-8 border-slate-100">
                                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                <div className="absolute inset-0">
                                    <img alt=""
                                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        src="/images/Doctores/Doctor4.png"
                                        width="1120" height="560"
                                        decoding="async" data-nimg="1"
                                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                </div>
                            </div>
                            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Janeth Molina</h3>
                            <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                        </div>
                    </div>
                </div>
            </section>
        </Format>
    )
}
export default FellowSegmentoAnterior;