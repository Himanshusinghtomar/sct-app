import Image from "next/image";
import React from "react";

const Help = () => {
  return (
    <div>
      <div className="flex items-center gap-4  mt-24 mb-24  justify-evenly flex-wrap">
        <div className="px-5">
          <div className="px-5">
            <p className=" font-semibold text-light-orange text-2xl">
              Here to help you
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white leading-5">
            Purchase and Sales<br /> Used Four Wheeler 
            </h1>
          </div>
          <div className="mt-10 px-5 text-white">
            <div className="flex gap-4 border-b-2 py-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-orange"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="max-w-sm">
                Offer a wide range of high-quality used cars at competitive prices
              </div>
            </div>
            <div className="flex gap-4 border-b-2 py-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-orange"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="max-w-sm">
                ADA, HIPAA and PCI compliant live chat software included free.
              </div>
            </div>
            <div className="flex gap-4 border-b-2 py-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-orange"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="max-w-sm">
                24x7 US Based, highly trained Live Chat Agents.
              </div>
            </div>
            <div className="flex gap-4 border-b-2 py-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-orange"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="max-w-sm">
                Agents go through vigorous training.
              </div>
            </div>
            <div className="flex gap-4 border-b-2 py-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-light-orange"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="max-w-sm">
                Instant lead and chat transcript forwarding.
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-b-2 rounded-3xl p-4 border-light-orange m-2">
          <Image
            src={
              "/assets/del02.jpeg"
            }
            alt="Group of people"
            width={650}
            height={400}
            className=" w-[400px] h-[440px] rounded-3xl border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
