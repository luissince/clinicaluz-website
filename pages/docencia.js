import Link from 'next/link';
import Format from '../layout/format';

function Docencia() {
    return (
        <Format type="nav">
            <div className=" font-normal m-0 ">

                {/* <!-- Page wrapper --> */}
                <div className="flex flex-col min-h-screen overflow-hidden">

                    {/* <!-- Site header --> */}

                    {/* <!-- Page content --> */}
                    <main className="grow">

                        {/* <!-- Hero --> */}
                        <section className="relative">

                            {/* <!-- Bg --> */}
                            <div className="absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-gradient-to-tr from-guindaOscuro to-guindaClaro pointer-events-none -z-10 " aria-hidden="true"></div>

                            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                                <div className="pt-36 md:pt-40 md:pb-20 ">

                                    {/* <!-- Hero content --> */}
                                    <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

                                        {/* <!-- Content --> */}
                                        <div className="md:w-[600px]">

                                            {/* <!-- Copy --> */}
                                            <h1 className="text-[2.75rem] leading-none -tracking-[0.01em] font-bold md:text-[3.25rem] md:leading-none md:-tracking-[0.01em] text-white/100 mb-6">
                                                Docencia o enseñanza
                                                <span className="relative inline-flex text-center justify-center">
                                                    <svg className="absolute -z-10" width="246" height="76" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M55.224 10.087c-13.986 3.38-25.552 7.614-33.97 12.438-4.171 2.412-7.508 4.953-9.953 7.58-2.395 2.628-3.807 5.332-4.21 8.058-.266 1.99.075 3.985 1.02 5.955.922 1.973 2.37 3.919 4.327 5.819 7.028 6.749 20.696 12.657 39.108 16.904 18.475 4.28 40.791 6.693 63.89 6.91 20.527.186 40.83-1.353 58.737-4.452 11.396-1.964 21.73-4.463 30.631-7.407 8.905-2.941 16.508-6.232 22.611-9.788 3.663-2.222 4.978-1.73 3.59.491-1.13 1.509-2.83 2.971-5.067 4.357-3.235 1.976-7.254 3.82-11.962 5.49-4.686 1.628-9.745 3.15-15.139 4.553a273.749 273.749 0 0 1-17.309 3.752 339.58 339.58 0 0 1-19.111 2.822c-3.367.35-6.676.738-10.087 1.025-3.412.286-6.868.546-10.339.75-13.955.815-28.266.87-42.283.165-13.996-.735-27.452-2.236-39.729-4.435-14.867-2.672-27.78-6.263-37.927-10.548-10.21-4.343-17.115-9.34-20.204-14.618C.15 43.028-.38 40.095.268 37.176c.295-1.462.868-2.917 1.713-4.357.883-1.432 2.027-2.847 3.427-4.239 2.819-2.783 6.622-5.463 11.342-7.99 4.626-2.528 10.101-4.9 16.335-7.074C48.423 8.116 68.15 4.072 90.24 1.802A371.99 371.99 0 0 1 115.924.135c54.806-1.437 105.87 8.691 124.34 24.662 1.911 1.728 3.392 3.498 4.431 5.295 1.352 2.388 1.655 4.82.901 7.234-.223 1.092-1.189 2.158-2.836 3.127-.493.309-1.076.603-1.742.88-.916.272-1.27-.27-1.344-1.462-.074-1.193 0-3.05-.429-5.409-.722-3.525-3.213-6.994-7.384-10.284-4.32-3.334-10.299-6.44-17.723-9.206-7.488-2.813-16.364-5.247-26.304-7.211-9.952-1.996-20.87-3.493-32.344-4.434-17.147-1.405-35.144-1.505-52.444-.292-8.673.62-17.094 1.537-25.108 2.732-7.997 1.207-15.556 2.672-22.552 4.37l-.162-.05Z" fill="#2DD4BF" fillRule="nonzero"></path>
                                                    </svg>
                                                    remoto
                                                </span>
                                            </h1>
                                            <p className="text-[1.125rem] leading-6 -tracking-[0.01em] text-white/100 mb-8">Somos una Institución de Asistencia Privada fundada en 2010.
                                                <br className="hidden md:block" /> Nuestra labor de atención, docencia e investigación ha sido fundamental en el desarrollo de la oftalmología en Peru.
                                            </p>

                                            {/* <!-- Buttons --> */}
                                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start st hp hh mb-12 md:mb-0">
                                                <div className="mt-3">
                                                    <a className="px-4 py-4 w-full inline-flex items-center text-slate-700/100 bg-slate-200/100 ci cq shadow-sm justify-center whitespace-nowrap rounded-[9999px] text-sm font-medium" href="#citas">
                                                        Agenda una cita aqui
                                                        <span className="tracking-normal text-slate-700/100 cz transition-transform duration-150 ease-in-out ml-2">
                                                            <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="ml-2 mt-3">
                                                    <a className="px-4 py-4 w-full inline-flex items-center text-slate-700/100 bg-slate-200/100 shadow-sm relative lc lh lv lm lp ld justify-center whitespace-nowrap rounded-[9999px] text-sm font-medium" href="#cursos">Ver Cursos disponibles</a>
                                                </div>
                                            </div>

                                        </div>

                                        {/* <!-- Image --> */}
                                        <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0">
                                            <div className="relative -ml-3 -mr-24 md:mx-0">
                                                {/* <img className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten" src="/images/hero-illustration.svg" width="960" height="960" aria-hidden="true" /> */}
                                                <img src="/images/hero-image2.png" className="md:max-w-none drop-shadow-[0_60px_60px_rgba(0,0,0,0.50)]" width="548" height="545" alt="Credit card" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
                            <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12" id="cursos">
                                <h2 className="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600">
                                    <span className="font-mono text-sm">Nuevos</span>
                                    <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
                                    <span className="ml-3 text-base font-medium tracking-tight">Cursos</span>
                                </h2>
                                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                                    Contamos con los más grandes especialistas, para una mejor enseñanza.
                                </p>
                                <p className="mt-4 text-lg tracking-tight text-slate-700">
                                    Todos los cursos mostrados a continuación cuentan con certificaciones a nombre de Clinica la luz y son a tiemplo completo presencial o via remota.
                                </p>
                            </div>
                            <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
                                <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20" role="list">
                                    <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12 cursor-pointer">
                                        <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]"> */}
                                                {/* <img src="/images/imagen1.svg" width="160" height="144" loading="lazy" /> */}
                                                <img src="/images/imagen10.jpg" />
                                            </div>
                                        </div>
                                        <div className="h-40">
                                            <h3 className="text-base font-medium tracking-tight text-slate-900">
                                                FellowShip en Segmento Anterior
                                            </h3>
                                            <p className="mt-2 text-sm text-slate-600">
                                                La oftalmología es una especialidad clínica y quirúrgica específica que además sirve de apoyo para otras especialidades de la medicina. Es un campo clínico-quirúrgico de
                                                educación e investigación en el que de forma directa e indirecta sus funciones impactan en la salud de la población general.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="mt-3 rounded-lg sm:mt-0">
                                                <Link href="/fellowSegmentoAnterior" className="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-guindaOscuro rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-guindaClaro focus:ring-2 ring-offset-current ring-offset-2">
                                                    Ver más
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12 cursor-pointer">
                                        <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* <img className="absolute inset-0 h-full w-full object-cover" src="/images/imagen2.webp" width="4096" height="4096" loading="lazy" sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw" />
                                                <img className="relative" src="/images/imagen3.svg" width="160" height="144" loading="lazy" /> */}
                                                <img src="/images/imagen20.jpg" />
                                            </div>
                                        </div>
                                        <div className="h-40">
                                            <h3 className="text-base font-medium tracking-tight text-slate-900">
                                                FellowShip en Retina
                                            </h3>
                                            <p className="mt-2 text-sm text-slate-600">
                                                Los Cursos de Alta Especialidad en Medicina (CAEM) forman a médicos que han terminado una especialidad médica o quirúrgica y su propósito fundamental es el desarrollo de
                                                competencias específicas, las cuales tienen carácter tutelar y requieren de un tiempo determinado para su desarrollo.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="mt-3 rounded-lg sm:mt-0">
                                                <Link href="/fellowRetina" className="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-guindaOscuro rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-guindaClaro focus:ring-2 ring-offset-current ring-offset-2">
                                                    Ver más
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12 cursor-pointer">
                                        <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                            <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                                                {/* <img src="/images/imagen4.svg" width="160" height="144" loading="lazy" /> */}
                                                <img src="/images/imagen30.jpg" />
                                            </div>
                                        </div>
                                        <div className="h-40">
                                            <h3 className="text-base font-medium tracking-tight text-slate-900">
                                                FellowShip en Glaucoma
                                            </h3>
                                            <p className="mt-2 text-sm text-slate-600">
                                                La educación médica es aquella que está relacionada con la medicina y que está conformada por la capacitación inicial para convertirse en un médico y por cualquier otra
                                                formación adicional afín.
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="mt-3 rounded-lg sm:mt-0">
                                                <Link href="/fellowGlaucoma" className="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-guindaOscuro rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-guindaClaro focus:ring-2 ring-offset-current ring-offset-2">
                                                    Ver más
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section>
                            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                                <div className="py-2 md:py-2">

                                    {/* <!-- Section header --> */}
                                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                        <h2 className="md:text-5xl md:tracking-[0] text-[2.25rem] leading-none tracking-[0] font-extrabold">
                                            Requisitos para ingresar a cualquier curso o programa
                                        </h2>
                                    </div>

                                    <div>
                                        {/* <!-- Section content --> */}
                                        <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row hw pp pd so sp hx">

                                            {/* <!-- Content --> */}
                                            <div className="md:w-[58.333333%] lg:w-1/2 order-1 md:order-none" data-aos="fade-up">
                                                {/* <!-- Content #1 --> */}
                                                <div x-show="category === '1'">
                                                    <h3 className="text-[1.875rem] leading-[1.333] tracking-[0] font-extrabold md:text-[2.25rem] md:leading-none md:tracking-[0] mb-3">Egresados de Instituciones educativas colombianas.</h3>
                                                    {/* <p className="text-[1.125rem] leading-normal -tracking-[0.01em] text-gray-500 mb-8">Work is is changing faster than at any other time in history. This rapid change requires a new hiring model. A model that is fair, inclusive, and empowering. That's why we built this.</p> */}
                                                    <ul className="inline-flex flex-col list-none m-0 p-0 su">
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Minimo tres(0) años de haberse graduado como oftalmologo</div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Según necesidad local</div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Es requisito indispensable el dominio de la tecnica extracapsular o por
                                                                    pequeña incision de cirujia de catarata
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Es requisito indispensable el dominio de la tecnica extracapsular o por
                                                                    hoja de vida con foto incluyendo datos de contacto, direciión física.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Dos cartas de recomendación</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <h3 className="text-[1.875rem] leading-[1.333] tracking-[0] font-extrabold md:text-[2.25rem] md:leading-none md:tracking-[0] mb-3">Entrevista virtual previa.</h3>
                                                    <ul className="inline-flex flex-col list-none m-0 p-0 su">
                                                        {/* <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaOscuro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="font-bold text-[1.125rem] leading-normal -tracking-[0.01em] mb-1">Ensure Quick Turnarounds</div>
                                                                <div className="text-gray-500">
                                                                    Work is is changing faster than at any other time in history. This rapid change requires a new hiring model.
                                                                </div>
                                                            </div>
                                                        </li> */}
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Minimo tres(0) años de haberse graduado como oftalmologo</div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Según necesidad local</div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Es requisito indispensable el dominio de la tecnica extracapsular o por
                                                                    pequeña incision de cirujia de catarata
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Es requisito indispensable el dominio de la tecnica extracapsular o por
                                                                    hoja de vida con foto incluyendo datos de contacto, direciión física.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-3 h-3 fill-current text-guindaClaro mt-[0.375rem] mr-[0.75rem] shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                                            </svg>
                                                            <div>
                                                                <div className="text-gray-500 mb-1">Dos cartas de recomendación</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Image --> */}
                                            <div className="md:w-[41.666667%] lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                                                <img className="mx-auto md:max-w-none" src="/images/docenciaRequisitos.png" width="540" height="405" alt="Features" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container py-32 md:py-32 mx-auto" id='citas'>
                                <h2 className="text-center text-4xl font-semibold uppercase text-guindaClaro sm:text-5xl lg:text-6xl">
                                    Aqui hay un formulario de contacto
                                </h2>
                                <h4 className="pt-6 text-center text-xl font-medium text-guindaOscuro sm:text-2xl lg:text-3xl">
                                    Tiene alguna pregunta?
                                </h4>
                                <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                                    <p className="font-body text-grey-10">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                                        condimentum turpis nisl sem, viverra habitasse urna ante lobortis
                                        fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
                                        accumsan.
                                    </p>
                                </div>
                                <form className="mx-auto w-full pt-10 sm:w-3/4">
                                    <div className="flex flex-col md:flex-row">
                                        <input className="mr-3 w-full rounded border-[1px] border-gray-400 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5" placeholder="Nombre" />
                                        <input className="mt-6 w-full rounded border-[1px] border-gray-400 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5" placeholder="Email" type="text" id="email" />
                                    </div>
                                    <textarea className="mt-6 w-full rounded border-[1px] border-gray-400 px-4 py-3 font-body text-black md:mt-8" placeholder="Mensaje" id="message" cols="30" rows="10"></textarea>
                                    <button className="mt-6 flex items-center justify-center rounded bg-guindaClaro px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                                        Enviar
                                        <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                                    </button>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Format>
    )
}

export default Docencia;