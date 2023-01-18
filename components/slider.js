import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

const Slider = () => {
  return (
    <div className={`relative bg-primary flex items-center justify-center overflow-hidden border-b-8 border-b-[#64748b33] h-screen`}>
      <div className={`absolute z-[1] container max-w-screen-2xl mx-auto ss:px-12 px-6 mt-12`}>
      
        <div className="lg:w-[600px] md:w-[700px] w-full">

          <h1 className="lg:text-6xl md:text-5xl text-3xl text-white font-black lg:leading-[5rem] md:leading-[4rem] leading-3rem]">
            Building the world’s most advanced digital vehicle inspections
          </h1>

          <p className={` text-dimWhite lg:text-xl md:text-base text-sm lg:leading-7 md:leading-6 leading-5 mt-5 `}>
            Modular technology integrates into existing workflows to create a 360° scan -- designed for smaller damages leveraging AI on mobile phones
          </p>

          <div className="flex items-center justify-start mt-5">
            <button className="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900 mr-3">
              Book your Demo
            </button>

            <button className="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900 ml-3">
              Watch Demo
            </button>
          </div>

          <p className="text-white mt-5 mb-5 lg:text-xl md:text-lg text-base">
            Market-leading technology
          </p>

          <div className="grid ss:grid-cols-2 grid-cols-1 divide-x">
            <div className="pr-3 flex items-center animate-pulse">
            <img src={"/images/clinicaLogo2.svg"} alt="hoobank" className="w-[124px]" />
            </div>
            <div className="text-slate-300 pl-4 animate-pulse ld:text-base md:text-sm text-xs ss:mt-0 mt-4">
              The Future50 Europe edition is the world’s most credible ranking of insurtechs that will soon take the industry by storm.
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
        <source
          src="https://global-uploads.webflow.com/602e266b79d4be7eebca445f/6033c263d3ea081bfed6d23d_RAVINMainHeaderBG-transcode.mp4"
          type="video/mp4"
        />
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