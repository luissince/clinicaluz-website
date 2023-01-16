import styles from "../constants/style";
import GetStarted from "./getstarted";
import { ChevronDoubleDownIcon} from '@heroicons/react/24/outline';

const Slider = () => {
  return (
    <div className={`relative bg-primary flex items-center justify-center overflow-hidden border-b-8 border-b-[#64748b33] h-screen`}>
      <div className={`absolute z-[1] container max-w-screen-2xl mx-auto px-12 mt-12`}>

        {/* <div className="bg-slate-500/[0.5] flex flex-row items-center py-[6px] rounded-[10px] mb-2">
          <img src={"/images/Discount.svg"} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[75px] leading-[75px]">
            Building the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">world’s most</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[75px] leading-[75px] w-full">
          advanced digital
        </h1>
        
        <h1 className="font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[75px] leading-[75px] w-full">
          vehicle inspections
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
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

          <p className="text-white mt-5 mb-5 text-xl">
            Market-leading technology
          </p>

          <div className="grid grid-cols-2 divide-x">
            <div className="pr-3 flex items-center animate-pulse">
              <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
            </div>
            <div className="text-slate-400 pl-4 animate-pulse">
              The Future50 Europe edition is the world’s most credible ranking of insurtechs that will soon take the industry by storm.
            </div>
          </div> 
      </div>

      <div className="absolute z-[2] bottom-0 mb-4">
        <ChevronDoubleDownIcon  className="w-6 text-white animate-bounce"/>
      </div>

      {/* <div className="static left-0 right-0 top-0 bottom-0 z-0 w-screen bg-[#23184f]"> */}
        {/* <div className="static left-0 right-0 top-0 bottom-0 z-[-1] w-full"> */}
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
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Slider;