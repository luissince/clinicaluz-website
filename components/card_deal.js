import styles, { layout } from "../constants/style";
import Button from "./button";

const CardDeal = () => (
  <section className="relative overflow-hidden bg-white w-full">
    <div className="container max-w-screen-2xl mx-auto px-12 py-12">

      <div className="max-w-2xl">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          Staff Médico
        </h2>

        <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
          Learn from the experts on the cutting-edge of deception at the most sinister companies.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
        <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
          <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block"></div>
         
          <div className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left" role="tablist" aria-orientation="vertical">
           
            <div className="relative lg:pl-8">
              <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-blue-600 stroke-blue-600">
                <path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <div className="font-mono text-sm text-blue-600">
                  <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:r4:">
                    <span className="absolute inset-0"></span>
                    Opening Day
                  </button>
                </div>
                <time datetime="2022-04-04" className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">April 4</time>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                <path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <div className="font-mono text-sm text-slate-500">
                  <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r5:">
                    <span className="absolute inset-0"></span>
                    Speakers & Workshops
                  </button>
                </div>
                <time datetime="2022-04-05" class="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">April 5</time>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400">
                <path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <div className="font-mono text-sm text-slate-500">
                  <button className="[&:not(:focus-visible)]:focus:outline-none" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r6:">
                    <span className="absolute inset-0"></span>
                    Interviews
                  </button>
                </div>
                <time datetime="2022-04-06" class="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">April 6</time>
              </div>
            </div>

          </div>

        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r1:">

            <div>
              <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-blue-300">
                </div>

                <div className="absolute inset-0" >
                  <img
                    src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteven-mchail.4e94472e.jpg&w=384&q=75"
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    width="1120" height="560"
                    decoding="async" data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 svg1 text-transparent" />
                </div>
                <svg viewBox="0 0 1 1">
                  <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                      <path d="M46.873,42a0.108,0.108,0,0,0-.07.02,0.1,0.1,0,0,0-.02.08c0,0.015,0,.6,0,0.6h0.086a0.07,0.07,0,0,1,.05.019,0.044,0.044,0,0,1,.014.041s0,0.215,0,.215l0.123-.058V43h0.636a0.107,0.107,0,0,0,.067-0.031,0.086,0.086,0,0,0,.026-0.052V42.239h-0.1a0.062,0.062,0,0,1-.065-0.051,0.084,0.084,0,0,1,.024-0.064H47.514V42H46.873Z" transform="translate(-46.781 -42)" fill="#fff" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Steven McHail</h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">Designer at Globex Corporation</p>
            </div>

            <div>
              <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-indigo-300"></div>
                <div className="absolute inset-0">
                  <img alt=""
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjaquelin-isch.880e5248.jpg&w=3840&q=75"
                    width="1120" height="560"
                    decoding="async" data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 svg2"
                    style={{ "color": "transparent" }} />
                  <svg viewBox="0 0 1 1">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                        <path d="M26.689,21a0.108,0.108,0,0,0,.07-0.02,0.1,0.1,0,0,0,.02-0.08c0-.015,0-0.6,0-0.6H26.7a0.07,0.07,0,0,1-.049-0.019,0.044,0.044,0,0,1-.014-0.041s0-.215,0-0.215l-0.123.058V20H25.874a0.094,0.094,0,0,0-.071.02,0.082,0.082,0,0,0-.022.063v0.677h0.1a0.062,0.062,0,0,1,.065.051,0.084,0.084,0,0,1-.024.064h0.124V21h0.641Z" transform="translate(-25.781 -20)" fill="#fff" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Jaquelin Isch</h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">UX Design at InGen</p>
            </div>

            <div>
              <div className="group relative h-[20rem] transform overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-sky-300"></div>
                <div className="absolute inset-0">
                  <img alt=""
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdianne-guilianelli.b4c5891f.jpg&w=3840&q=75"
                    width="1120" height="560"
                    decoding="async" data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 svg3" />
                  <svg viewBox="0 0 1 1">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Dianne Guilianelli</h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">General Manager at Initech</p>
            </div>

            <div>
              <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-blue-300"></div>
                <div className="absolute inset-0">
                  <img alt=""
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fronni-cantadore.0d04b7fe.jpg&w=3840&q=75"
                    width="1120" height="560"
                    decoding="async" data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 svg1" />
                  <svg viewBox="0 0 1 1">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox" id="imgSvg1">
                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Ronni Cantadore</h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">Design Engineer at Weyland-Yutani</p>
            </div>

            <div>
              <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-indigo-300"></div>
                <div className="absolute inset-0">
                  <img alt=""
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ferhart-cockrin.3697fef6.jpg&w=3840&q=75"
                    width="1120" height="560"
                    decoding="async" data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 svg2" />
                  <svg viewBox="0 0 1 1">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox" id="imgSvg2">
                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Erhart Cockrin</h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">Product Lead at Cyberdyne Systems</p>
            </div>

            <div>
              <div className="group relative h-[20rem]  transform overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 right-4 bottom-6 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-sky-300"></div>
                <div className="absolute inset-0">
                  <img alt=""
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fparker-johnson.3f6d7276.jpg&w=3840&q=75"
                    width="1120" height="560"
                    decoding="async" data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 svg3" />
                  <svg viewBox="0 0 1 1">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox" id="imgSvg3">
                        <path d="M37.689,35a0.108,0.108,0,0,1,.07.02,0.1,0.1,0,0,1,.02.08c0,0.015,0,.6,0,0.6H37.7a0.07,0.07,0,0,0-.05.019,0.044,0.044,0,0,0-.014.041s0,0.215,0,.215l-0.123-.058V36H36.874a0.094,0.094,0,0,1-.071-0.02,0.082,0.082,0,0,1-.022-0.063V35.239h0.1a0.062,0.062,0,0,0,.065-0.051,0.084,0.084,0,0,0-.024-0.064h0.124V35h0.641Z" transform="translate(-36.781 -35)" fill="#fff" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Parker Johnson</h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">UI Designer at MomCorp</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
);

export default CardDeal;