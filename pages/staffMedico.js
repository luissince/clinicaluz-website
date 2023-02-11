import Format from '../layout/format';
import { useState } from "react";
import Link from 'next/link';

function StaffMedico() {

    const [showPanelDoctors, setShowPanelDoctors] = useState('segmento')

    return (
        <Format type="nav">

            <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
                    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative pt-36 ml-auto">
                        <div className="lg:w-2/3 text-center mx-auto">
                            <h1 className="text-guindaClaro font-bold text-5xl md:text-6xl xl:text-7xl">Staff Medicos <span className="text-guindaClaro ">oftalmologia.</span></h1>
                            <p className="mt-8 text-xl text-gray-700">
                                Nuestros mejores medicos al cuidado de tus ojos y tu salud; disponemos de más de 50 médicos, especializados para el cuidado de tus ojos.
                            </p>
                            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                                <Link href="/docencia" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-guindaClaro before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span className="relative text-base font-semibold text-white">
                                        Sé parte de nuestro equipo médico
                                    </span>
                                </Link>
                            </div>
                            <div className="hidden py-8 mt-16 border-y border-gray-100 sm:flex mx-auto items-center justify-center">
                                <div className="text-center">
                                    <h6 className=" font-display text-4xl font-medium tracking-tighter text-guindaClaro sm:text-5xl">Staff Médico</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6 mb-20">
                <div className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
                    <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                        <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block"></div>

                        <div className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left" role="tablist" aria-orientation="vertical">

                            <div className="relative lg:pl-8">
                                <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-guindaLigth stroke-guindaLigth">
                                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <div className="relative">
                                    <div className="font-mono text-sm text-guindaLigth">
                                        <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="true" tabIndex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:r4:" onClick={() => setShowPanelDoctors("segmento")}>
                                            <span className="absolute inset-0"></span>
                                            Especialidad
                                        </button>
                                    </div>
                                    <a className="mt-1.5 block text-2xl font-semibold tracking-tight text-guindaOscuro">Segmento anterior, cornea <br />y cirugia refractiva</a>
                                </div>
                            </div>

                            <div className="relative lg:pl-8">
                                <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <div className="relative">
                                    <div className="font-mono text-sm text-slate-500">
                                        <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabIndex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r5:" onClick={() => setShowPanelDoctors("glaucoma")}>
                                            <span className="absolute inset-0"></span>
                                            Especialidad
                                        </button>
                                    </div>
                                    <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-guindaOscuro">Glaucoma</time>
                                </div>
                            </div>

                            <div className="relative lg:pl-8">
                                <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <div className="relative">
                                    <div className="font-mono text-sm text-slate-500">
                                        <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabIndex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r6:" onClick={() => setShowPanelDoctors("oculoplastia")}>
                                            <span className="absolute inset-0"></span>
                                            Especialidad
                                        </button>
                                    </div>
                                    <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-guindaOscuro">Oculoplastia</time>
                                </div>
                            </div>

                            <div className="relative lg:pl-8">
                                <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <div className="relative">
                                    <div className="font-mono text-sm text-slate-500">
                                        <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabIndex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r6:" onClick={() => setShowPanelDoctors("retina")}>
                                            <span className="absolute inset-0"></span>
                                            Especialidad
                                        </button>
                                    </div>
                                    <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-guindaOscuro">Retina y Vitreo</time>
                                </div>
                            </div>

                            <div className="relative lg:pl-8">
                                <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <div className="relative">
                                    <div className="font-mono text-sm text-slate-500">
                                        <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabIndex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r6:" onClick={() => setShowPanelDoctors("oftalmologia")}>
                                            <span className="absolute inset-0"></span>
                                            Especialidad
                                        </button>
                                    </div>
                                    <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-guindaOscuro">Oftalmologia Pediatrica</time>
                                </div>
                            </div>

                            <div className="relative lg:pl-8">
                                <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                </svg>
                                <div className="relative">
                                    <div className="font-mono text-sm text-slate-500">
                                        <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabIndex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r6:" onClick={() => setShowPanelDoctors("ecografias")}>
                                            <span className="absolute inset-0"></span>
                                            Especialidad
                                        </button>
                                    </div>
                                    <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-guindaOscuro">Ecografias UBM</time>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="lg:col-span-3">
                        {showPanelDoctors === "segmento" &&
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabIndex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:" id="segmento">

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                src="/images/Doctores/Doctor1.png"
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                        </div>
                                        <svg viewBox="0 0 1 1">
                                            <defs>
                                                <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                    <path d="M46.873,42a0.108,0.108,0,0,0-.07.02,0.1,0.1,0,0,0-.02.08c0,0.015,0,.6,0,0.6h0.086a0.07,0.07,0,0,1,.05.019,0.044,0.044,0,0,1,.014.041s0,0.215,0,.215l0.123-.058V43h0.636a0.107,0.107,0,0,0,.067-0.031,0.086,0.086,0,0,0,.026-0.052V42.239h-0.1a0.062,0.062,0,0,1-.065-0.051,0.084,0.084,0,0,1,.024-0.064H47.514V42H46.873Z" transform="translate(-46.781 -42)" fill="#fff" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Sanchez Cueva Sergio Alfredo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Director Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor2.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M26.689,21a0.108,0.108,0,0,0,.07-0.02,0.1,0.1,0,0,0,.02-0.08c0-.015,0-0.6,0-0.6H26.7a0.07,0.07,0,0,1-.049-0.019,0.044,0.044,0,0,1-.014-0.041s0-.215,0-0.215l-0.123.058V20H25.874a0.094,0.094,0,0,0-.071.02,0.082,0.082,0,0,0-.022.063v0.677h0.1a0.062,0.062,0,0,1,.065.051,0.084,0.084,0,0,1-.024.064h0.124V21h0.641Z" transform="translate(-25.781 -20)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Silva Cayatopa Fermin</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Presidente Del Comite Academico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor3.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Viaña Pongo Victor Raul</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Jefe Del Departamento De Segmento Anterior, Cornea Y Cirugia Refractiva</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor4.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Janeth Molina</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor5.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Calderon Fernandez Adolfo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor6.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Zans Ly Jhon Eduardo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Medico Oftalmologo Retinologo</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor7.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Custodio Sheen Fabiola Medalith</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Medico Oftalmologo Retinologo</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor8.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Macedo Rosas Marilda</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor9.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Bastardo Guillen Luisa Veronica</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Jefa Del Departamento De Glaucoma</p>
                                </div>

                            </div>
                        }

                        {showPanelDoctors === "glaucoma" &&
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabIndex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:" id="segmento">

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor4.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Janeth Molina</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor5.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Calderon Fernandez Adolfo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor6.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Zans Ly Jhon Eduardo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Medico Oftalmologo Retinologo</p>
                                </div>

                            </div>
                        }

                        {showPanelDoctors === "oculoplastia" &&
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabIndex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:" id="segmento">

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor7.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Custodio Sheen Fabiola Medalith</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Medico Oftalmologo Retinologo</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor4.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Janeth Molina</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor9.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Bastardo Guillen Luisa Veronica</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Jefa Del Departamento De Glaucoma</p>
                                </div>

                            </div>
                        }

                        {showPanelDoctors === "retina" &&
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabIndex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:" id="segmento">

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                src="/images/Doctores/Doctor1.png"
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                        </div>
                                        <svg viewBox="0 0 1 1">
                                            <defs>
                                                <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                    <path d="M46.873,42a0.108,0.108,0,0,0-.07.02,0.1,0.1,0,0,0-.02.08c0,0.015,0,.6,0,0.6h0.086a0.07,0.07,0,0,1,.05.019,0.044,0.044,0,0,1,.014.041s0,0.215,0,.215l0.123-.058V43h0.636a0.107,0.107,0,0,0,.067-0.031,0.086,0.086,0,0,0,.026-0.052V42.239h-0.1a0.062,0.062,0,0,1-.065-0.051,0.084,0.084,0,0,1,.024-0.064H47.514V42H46.873Z" transform="translate(-46.781 -42)" fill="#fff" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Sanchez Cueva Sergio Alfredo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Director Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor8.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Macedo Rosas Marilda</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor9.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Bastardo Guillen Luisa Veronica</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Jefa Del Departamento De Glaucoma</p>
                                </div>

                            </div>
                        }

                        {showPanelDoctors === "oftalmologia" &&
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabIndex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:" id="segmento">

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor4.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Janeth Molina</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor2.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M26.689,21a0.108,0.108,0,0,0,.07-0.02,0.1,0.1,0,0,0,.02-0.08c0-.015,0-0.6,0-0.6H26.7a0.07,0.07,0,0,1-.049-0.019,0.044,0.044,0,0,1-.014-0.041s0-.215,0-0.215l-0.123.058V20H25.874a0.094,0.094,0,0,0-.071.02,0.082,0.082,0,0,0-.022.063v0.677h0.1a0.062,0.062,0,0,1,.065.051,0.084,0.084,0,0,1-.024.064h0.124V21h0.641Z" transform="translate(-25.781 -20)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Silva Cayatopa Fermin</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Presidente Del Comite Academico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor9.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Bastardo Guillen Luisa Veronica</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Jefa Del Departamento De Glaucoma</p>
                                </div>

                            </div>
                        }

                        {showPanelDoctors === "ecografias" &&
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabIndex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:" id="segmento">

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg1">
                                            <img alt=""
                                                src="/images/Doctores/Doctor1.png"
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 text-transparent" />
                                        </div>
                                        <svg viewBox="0 0 1 1">
                                            <defs>
                                                <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                                                    <path d="M46.873,42a0.108,0.108,0,0,0-.07.02,0.1,0.1,0,0,0-.02.08c0,0.015,0,.6,0,0.6h0.086a0.07,0.07,0,0,1,.05.019,0.044,0.044,0,0,1,.014.041s0,0.215,0,.215l0.123-.058V43h0.636a0.107,0.107,0,0,0,.067-0.031,0.086,0.086,0,0,0,.026-0.052V42.239h-0.1a0.062,0.062,0,0,1-.065-0.051,0.084,0.084,0,0,1,.024-0.064H47.514V42H46.873Z" transform="translate(-46.781 -42)" fill="#fff" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Sanchez Cueva Sergio Alfredo</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Director Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg2">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor8.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Macedo Rosas Marilda</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Docente Medico</p>
                                </div>

                                <div>
                                    <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                                        <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-guindaLigth"></div>
                                        <div className="absolute inset-0 svg3">
                                            <img alt=""
                                                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                src="/images/Doctores/Doctor3.png"
                                                width="1120" height="560"
                                                decoding="async" data-nimg="1"
                                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                                            <svg viewBox="0 0 1 1">
                                                <defs>
                                                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                                                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Viaña Pongo Victor Raul</h3>
                                    <p className="mt-1 text-base tracking-tight text-slate-500">Jefe Del Departamento De Segmento Anterior, Cornea Y Cirugia Refractiva</p>
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </div>

        </Format>
    )
}
export default StaffMedico;