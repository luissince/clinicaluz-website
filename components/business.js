import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Business = () => (
  <section className={`relative flex items-center justify-center overflow-hidden bg-[#23184f] xl:h-[600px] 2xl:h-[700px]`}>

    <div className="absolute z-[1] mx-auto w-full">
      <div className="container max-w-screen-2xl mx-auto px-12">

        <div className="relative">
          <nav className="lg:mb-12 mb-3 flex gap-8 ">
            <a className="relative border-b-4 border-b-white px-3 py-2 text-base text-white transition-colors  hover:text-gray-500 animate-pulse" to="/#features">
              <span className="relative z-10">Ravin Inspect</span>
            </a>
            <a className="relative border-b-4 border-b-white px-3 py-2 text-base text-white transition-colors  hover:text-gray-500" to="/#reviews">
              <span className="relative z-10">Ravin Autoscan</span>
            </a>
            <a className="relative border-b-4 border-b-white px-3 py-2 text-base text-white transition-colors  hover:text-gray-500" to="/#pricing">
              <span className="relative z-10">Ravin Eye</span>
            </a>
          </nav>

          <div className="flex mb-2">
            <img src={"/images/logo.svg"} alt="hoobank" className="w-[124px] h-[32px]" />
          </div>

          <div className="flex mb-3">
            <p className="font-poppins text-white font-bold lg:text-5xl text-4xl">Autoscan</p>
            <p className="font-poppins text-white font-normal lg:text-base text-sm">TM</p>
          </div>

          <div className="w-[24rem] lg:mt-6 mt-3">
            <p className="lg:text-lg text-base py-2 text-gray-500 leading-6 animate-pulse">
              The most powerful vehicle inspection app yet. Triggered by a link to your mobile browser. Allows even non-professionals to grade and report vehicle condition, anywhere.
            </p>
          </div>

          <div className="flex lg:mt-28 mt-6">
            <p className="lg:text-xl text-lg py-2 text-gray-200 mr-2">More About Our Tools</p> <ChevronRightIcon className="w-5 text-slate-400" />
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