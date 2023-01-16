import { features } from "../constants";
import styles, { layout } from "../constants/style";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from "./button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-400 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section className={`relative flex items-center justify-center overflow-hidden bg-[#23184f]`}>

    <div className="absolute z-[1] mx-auto w-full">
      <div className="container max-w-screen-2xl mx-auto px-12">
        <div className="relative">
          <nav className="mb-6 flex gap-8">
            <a className="relative border-b-4 border-b-white px-3 py-2 text-sm text-white transition-colors  hover:text-gray-500" href="/#features">
              <span className="relative z-10">Ravin Inspect</span>
            </a>
            <a className="relative border-b-4 border-b-white px-3 py-2 text-sm text-white transition-colors  hover:text-gray-500" href="/#reviews">
              <span className="relative z-10">Ravin Autoscan</span>
            </a>
            <a className="relative border-b-4 border-b-white px-3 py-2 text-sm text-white transition-colors  hover:text-gray-500" href="/#pricing">
              <span className="relative z-10">Ravin Eye</span>
            </a>
          </nav>

          <div style={{ "width": "100%", "position": "relative", "display": "block", "overflow": "hidden" }}>
            <div className="flex mt-3 mb-2">
              <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
            </div>

            <div className="flex mb-3">
              <p className="font-poppins text-white font-bold text-[52px]">Autoscan</p>
              <p className="font-poppins text-white font-normal text-[15px]">TM</p>
            </div>

            <div className="w-[24rem] mt-6">
              <p className="font-poppins font-normal text-[13px] py-2 text-gray-500 leading-6">
                The most powerful vehicle inspection app yet. Triggered by a link to your mobile browser. Allows even non-professionals to grade and report vehicle condition, anywhere.
              </p>
            </div>

            <div className="flex mt-28">
              <p className="font-poppins font-normal text-[17px] py-2 text-gray-200 mr-2">More About Our Tools</p> <ChevronRightIcon className="w-5 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="static left-0 right-0 top-0 bottom-0 z-0 w-screen bg-[#23184f]">
      <div className="static left-0 right-0 top-0 bottom-0 z-[-1] w-full">
        <video
          autoPlay
          loop
          muted
          width={"100%"}
          height={"100%"}
          className=""
        >
          <source
            src="https://global-uploads.webflow.com/602e266b79d4be7eebca445f/6326f28fe3580bdcf109862c_Ravin-Eye.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  </section>
);

export default Business;