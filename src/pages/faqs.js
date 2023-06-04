import Header from "@/components/Header";
import React, { useState } from "react";
import { faqData } from "@/_mock/faqData";
import { carsData, brands } from "@/_mock/carsData";
import { v4 as uuidv } from "uuid";
import AppLayout from "@/layout/AppLayout";
import Image from "next/image";

const Faqs = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#171718]  to-[#76777a]">
        <div className="max-w-[1600px] m-auto">
          <Header bgColor="" />
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-light-orange text-2xl">
              Frequently Asked Question
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">
              Still need help?
            </h1>
            <p className="lg:max-w-xl m-auto mt-3 text-light-orange">
              Can’t find answer? call us at{" "}
              <span className="font-bold">+91 9709884713</span> or email us{" "}
              <span className="font-bold">singhcartrade@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
          {/* <!-- Question 1 --> */}
          {faqData?.map((list) => (
            <div className="lg:w-8/12 w-full mx-auto" key={uuidv()}>
              <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

              <div className="w-full md:px-6  ">
                <div
                  id="mainHeading"
                  className="flex justify-between items-center w-full"
                >
                  <div className=" ">
                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800 ">
                      {" "}
                      <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        Q
                      </span>{" "}
                      <span className="font-bold">{list.question}</span>
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => setOpen(!open)}
                  >
                    <svg
                      className={
                        "transform " + (open ? "rotate-180" : "rotate-0")
                      }
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="black"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu"
                  className={"mt-6 w-full " + (open ? "block" : "hidden")}
                >
                  <p className="text-base leading-6 text-gray-600 font-normal">
                    {list.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AppLayout>
    </>
  );
};

export default Faqs;
