import AppLayout from "@/layout/AppLayout";
import Image from "next/image";
import React from "react";

const Frame = () => {
  return (
    <div>
      <div className="mt-9 px-2">
        <Image
          src={"/assets/sctland.jpg"}
          alt="Group of people"
          width={1426}
          height={534}
          className="m-auto rounded-[2rem]"
        />
      </div>
      <div className="flex items-center gap-4  mt-24 mb-24  justify-between flex-wrap">
        <div className="px-5">
          <h1 className="text-5xl mb-5 font-bold">Our History</h1>
          <h4 className="text-2xl max-w-xl mb-8">
            Singh Car Trade Founded in Feb, 2020 in Bihar
          </h4>
          <p className="max-w-2xl ">
          We started our journey in 2011 and now proudly serving with our full dignity and values all over North Bengal. It is never so easy to create a space for your trade in such a competitive market, but we stood out successfully by giving out all our efforts to our providence.
          </p>
        </div>
        <div className=" flex justify-center border-l-2 border-b-2 rounded-3xl p-2 border-light-orange m-2">
          <Image
            src={"/assets/del03.jpeg"}
            alt="Group of people"
            width={650}
            height={400}
            className=" lg:w-[400px] lg:h-[440px] md:w-[400px] md:h-[440px] sm:w-[400px] sm:h-[440px]  rounded-3xl "
          />
        </div>
      </div>
      <div className=" bg-gradient-to-r from-[#171718]  to-[#76777a] py-5">
        <AppLayout >
        <div className="flex items-center gap-4  mt-24 mb-24  justify-between flex-wrap ">
          <div className="sm:order-last lg:order-last md:order-last order-last border-l-2 border-b-2 rounded-3xl p-2 border-light-orange m-2">
            <Image
              src={"/assets/del02.jpeg"}
              alt="Group of people"
              width={650}
              height={400}
              className=" lg:w-[400px] lg:h-[440px] md:w-[400px] md:h-[440px] sm:w-[400px] sm:h-[440px] rounded-3xl "
            />
          </div>
          <div className="sm:order-first lg:order-last md:order-first px-5 ">
            <h1 className="text-5xl mb-5 font-bold text-light-orange">Our Goal</h1>
            <h4 className="text-2xl max-w-xl mb-8 text-white">
              Goals to Achieve
            </h4>
            <p className="max-w-2xl text-light-orange/80">
            Our aim is to extend our arms of trusted and quality service into a stage of faith where the number of our happy customers overwhelms than any can expect. We are determined to learn, grow and develop.We visualize your needs to turn them into reality through the best way possible. 'Singh Car Trade' not only commits to give its best but also keeps its promise to provide you the best deal out of all.
            </p>
          </div>
        </div>
        
        </AppLayout>
      </div>
    </div>
  );
};

export default Frame;
