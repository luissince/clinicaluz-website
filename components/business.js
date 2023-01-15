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
  // <section id="features" className={layout.section}>
  //   <div className={layout.sectionInfo}>
  //     <h2 className={`${styles.heading2}`}>
  //       You do the business, <br className="sm:block hidden" /> we’ll handle
  //       the money.
  //     </h2>
  //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  //       With the right credit card, you can improve your financial life by
  //       building credit, earning rewards and saving money. But with hundreds
  //       of credit cards on the market.
  //     </p>

  //     <Button styles={`mt-10`} />
  //   </div>

  //   <div className={`${layout.sectionImg} flex-col`}>
  //     {features.map((feature, index) => (
  //       <FeatureCard key={feature.id} {...feature} index={index} />
  //     ))}
  //   </div>
  // </section>
  <section className={`relative flex items-start justify-center h-screen`}>
    <div className={`${styles.paddingX} absolute left-0 z-20 text-2xl text-white flex flex-col`}>
      <nav className="mt-12 mb-6 flex gap-8">
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
      <div className="flex mt-3 mb-2">
        <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
      </div>
      <div className="flex mb-3">
        <p className="font-poppins font-bold text-[52px]">Autoscan</p>
        <p className="font-poppins font-normal text-[15px]">TM</p>
      </div>
      <div className="w-[24rem] mt-6">
        <p className="font-poppins font-normal text-[13px] py-2 text-gray-500 leading-6">
          The most powerful vehicle inspection app yet. Triggered by a link to your mobile browser. Allows even non-professionals to grade and report vehicle condition, anywhere.
        </p>
      </div>

      <div className="flex mt-36">
        <p className="font-poppins font-normal text-[17px] py-2 text-gray-200 mr-2">More About Our Tools</p> <ChevronRightIcon className="w-5 text-slate-400" />
      </div>
    </div>
    <video
      autoplay
      loop
      muted
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source
        src="https://global-uploads.webflow.com/602e266b79d4be7eebca445f/6326f28fe3580bdcf109862c_Ravin-Eye.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default Business;