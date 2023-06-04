import Image from "next/image";
import React from "react";

const AverageRevenue = () => {
  return (
    <div className=" bg-[#F9AF82]  w-full h-max overflow-hidden relative rounded-lg">
      <div className="z-0 absolute bottom-0">
        <Image
          src={"/assets/lines/Vector (4).png"}
          alt="line image"
          width="1784"
          height="692"
          className=" opacity-25 "
        />
      </div>
      <div className="z-0 absolute bottom-0">
        <Image
          src={"/assets/lines/Vector (5).png"}
          alt="line image"
          width="1784"
          height="692"
          className=" opacity-25 "
        />
      </div>
      <div className="z-0 absolute bottom-0">
        <Image
          src={"/assets/lines/Vector (6).png"}
          alt="line image"
          width="1784"
          height="692"
          className=" opacity-25 "
        />
      </div>
      <div className="z-0 absolute bottom-0">
        <Image
          src={"/assets/lines/Vector (7).png"}
          alt="line image"
          width="1784"
          height="692"
          className=" opacity-25 "
        />
      </div>
      <div className="z-0 absolute bottom-0">
        <Image
          src={"/assets/lines/Vector (8).png"}
          alt="line image"
          width="1784"
          height="692"
          className=" opacity-25 "
        />
      </div>
      <div className="z-0 absolute bottom-0">
        <Image
          src={"/assets/lines/Vector (9).png"}
          alt="line image"
          width="1784"
          height="692"
          className=" opacity-25 "
        />
      </div>

      <h3 className="z-20 relative flex justify-center  font-bold self-center lg:pt-16 lg:pb-10 lg:text-5xl md:pt-14 md:pb-9 md:text-4xl sm:pt-10 sm:pb-7 sm:text-2xl ">
        Over 90+ businesses and startups trust us
      </h3>
      <div className="flex justify-evenly lg:pb-14 md:pb-12 sm:pb-9 flex-wrap relative">
        <div>
          <p>
            <span className="md:text-3xl text-xl font-bold">40%</span>Average
            Revenue Boost
          </p>
        </div>
        <div>
          <p>
            <span className="md:text-3xl text-xl font-bold">125+</span>Global
            Clients
          </p>
        </div>
        <div>
          <p>
            <span className="md:text-3xl text-xl font-bold">7k</span>Customer
            Interactions per day
          </p>
        </div>
      </div>
    </div>
  );
};

export default AverageRevenue;
