import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

const Slider = () => {
  return (
    <div className={`relative bg-primary flex items-center justify-center overflow-hidden border-b-8 border-b-[#64748b33] h-screen`}>
      <div className={`absolute z-[1] container max-w-screen-2xl mx-auto ss:px-12 px-6 mt-12`}>

        <div className="lg:w-[600px] md:w-[700px] w-full">

          <h1 className="lg:text-6xl md:text-5xl text-3xl text-white font-black lg:leading-[5rem] md:leading-[4rem] leading-3rem]">
            Tu visión es nuestra razón de existir
          </h1>

          <p className={` text-dimWhite lg:text-xl md:text-base text-sm lg:leading-7 md:leading-6 leading-5 mt-5 `}>
            Líderes en la prevención, diagnóstico y tratamiento de enfermedades visuales con reconocimiento nacional e internacional
          </p>

          <div className="flex items-center justify-start mt-5">
            <button className="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-300 shadow-sm hover:bg-guindaOscuro mr-3">
              Reserva una Cita
            </button>

            <button className="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-300 shadow-sm hover:bg-guindaOscuro ml-3">
              Nuestros Horarios
            </button>
          </div>

          <p className="text-white mt-5 mb-5 lg:text-xl md:text-lg text-base">
            Contamos con norma ISO
          </p>

          <div className="grid ss:grid-cols-2 grid-cols-1 divide-x">
            <div className="pr-3 flex items-center animate-pulse">
              <img src={"/images/iso2.svg"} alt="hoobank" className="w-[124px]" />
            </div>
            <div className="text-slate-300 pl-4 animate-pulse ld:text-base md:text-sm text-xs ss:mt-0 mt-4">
              Contamos con la certificación del Sistema de Gestión de Calidad ISO 9001 2015 en Atención al Cliente y Servicio de Hospitalización. La Norma ISO 9001 2015 es considerada como un referente mundial que ayuda a las organizaciones a desarrollar, implementar y mejorar la eficacia de nuestros procesos para lograr la excelencia a través de la mejora continua..
            </div>
          </div>
        </div>

      </div>

      <div className="absolute z-[2] bottom-0 mb-4">
        <ChevronDoubleDownIcon className="w-6 text-white animate-bounce" />
      </div>

      <video
        autoPlay
        loop
        muted
        width={"100%"}
        height={"100%"}
        className="absolute  w-auto min-w-full min-h-full max-w-none"
      >
        {/* <source
          src="https://global-uploads.webflow.com/602e266b79d4be7eebca445f/6033c263d3ea081bfed6d23d_RAVINMainHeaderBG-transcode.mp4"
          type="video/mp4"
        /> */}
        <source
          src="/images/video.mp4"
          type="video/mp4"
        />
        {/* <source
          src="https://www.youtube.com/embed/I-tMFWGfQ5Q"
          type="video/mp4" 
        />*/}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Slider;