import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col justify-center  " id="services">
      <p className="text-center text-[#20BFB6] text-3xl font-extrabold">
        About Us
      </p>
      <div className="grid lg:grid-col-3">
        <div className="lg:col-span-1">
          <Image
            alt="lady"
            src={"/assets/sct.png"}
            width={644}
            height={722}
          />
        </div>
        <div className="lg:col-start-2 self-center px-4 py-2">
          <h1 className="lg:text-5xl text-2xl font-bold max-w-md text-[#20BFB6]">
            Leading support as a service provider.
          </h1>
          <p className="leading-8 max-w-2xl mt-4">
            Startups and digital businesses choose HiredSupport to handle their
            customer service 24 hours a day. We cover and work with all major
            support channels and help businesses with their customer support,
            sales, back office processing, and everything in between.
          </p>
          <h1 className="lg:text-5xl font-bold text-2xl mt-4">
            So why ANT ?
          </h1>
          <p className="max-w-md mt-5 leading-8">
            Our app went viral and HiredSupport helped us scale our operations
            by handling all of our customer support 24x7.
          </p>
          <button className="inline-block rounded-full bg-neutral-800 mt-7 px-6 pb-2 pt-2.5 text-xl font-medium  leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
