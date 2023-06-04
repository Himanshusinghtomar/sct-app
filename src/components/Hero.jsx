import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" lg:p-4 p-2 flex justify-between items-center md:flex-row flex-col-reverse box-border mt-10 ">
      <div className="self-center">
        
        <div className="mr-10 py-4">
          <h1 className=" text-[#20BFB6] lg:text-7xl md:text-5xl text-2xl font-extrabold capitalize  lg:max-w-2xl lg:leading-[80px]">
            Best Used Car <span className="text-white">Dealer</span>.
          </h1>
          <p className="mt-[30px] lg:max-w-xl text-white">
            Singh Car Trade - Best Used Car Dealer in Bihar. We promise to deliver the best
            and conditioned used cars and Provide our best costumer service.
          </p>
        </div>
        <div className="mt-5">
          <button className="inline-block rounded-full bg-[#20BFB6] mr-2 px-6 pb-2 pt-2.5 text- base font-medium capitalize leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <div className="relative">
          <Image
            src={"/assets/pngegg 1.png"}
            alt="hero"
            height={"474"}
            width={"840"}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
