import styles from "../constants/style";
import GetStarted from "./getstarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} border-b-8 border-b-[#64748b33]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={"/images/Discount.svg"} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[75px] leading-[75px]">
            Building the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">world’s most</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[75px] leading-[75px] w-full">
          advanced digital vehicle inspections
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Modular technology integrates into existing workflows to create a 360° scan -- designed for smaller damages leveraging AI on mobile phones
        </p>

        <div class="flex items-center justify-start mt-5">
          <button class="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900 mr-3">
            Book your Demo
          </button>

          <button class="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900 ml-3">
            Watch Demo
          </button>
        </div>

        <p className="text-white mt-5 mb-5 text-xl">
          Market-leading technology
        </p>

        <div class="grid grid-cols-2 divide-x">
          <div className="pr-3 flex items-center">
            <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
          </div>
          <div className="text-slate-400 pl-3">
            The Future50 Europe edition is the world’s most credible ranking of insurtechs that will soon take the industry by storm.
          </div>
        </div>
      </div>

      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;