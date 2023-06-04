import privacy from "@/pages/privacy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-[#20BFB6]  max-w-app w-full rounded-lg overflow-hidden relative -mb-20  ">
          <div className="sm:hidden lg:block md:block hidden">
            <div className="z-0 absolute bottom-0 ">
              <Image
                src={"/assets/lines/Vector (11).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (12).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (13).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (14).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (15).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (16).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (17).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
            <div className="z-0 absolute bottom-0">
              <Image
                src={"/assets/lines/Vector (18).png"}
                alt="line image"
                width="1784"
                height="692"
                className=" opacity-25 "
              />
            </div>
          </div>
          <div className="flex items-center justify-evenly  relative">
            <div className="lg:p-12 sm:p-6 p-4">
              <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-sm font-bold">
                Come To Our 
                <br /> Showroom Today.
              </h3>
              <div className="pt-3">
                <button className="inline-block rounded-full bg-neutral-800 mr-2 lg:px-6 lg:py-2 md:px-6 md:py-2 sm:px-6 sm:py-2 px-3 py-1 lg:text-lg text-xs font-medium  leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                  Test Drive
                </button>
                <span className="text-sm">4.85/5 From 400+ Reviews</span>
              </div>
            </div>
            <div className="lg:p-12 p-2">
              <div className="flex gap-3 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>

                <p className="lg:text-xl text-xs">Exclusive Features</p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="lg:text-xl text-xs">Instant loan Processing</p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="lg:text-xl text-xs">Non Accidental Car</p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="lg:text-xl text-xs">Hand to Hand Delivery on Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#242423]">
        <div className=" text-white max-w-app m-auto">
          <div className="pt-32">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 place-items-center mb-6">
              <div className="pt-4 px-4">
                <Image
                  src={"/assets/sct.png"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="mb-1"
                />
                <p>Never worry about customer service.</p>
                <p>contact@ +91 9973866463</p>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold mb-4">Service</h4>
                <p>Second Hand Cars</p>
                <p>Sales </p>
                <p>Purchases</p>
                <p>Virtual Assistant</p>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-4">About</h4>
                <p>Our Client</p>
                <p>Pricing</p>
                <Link key={"privacy"} href={"/privacy"}>
                  Privacy Policy
                </Link>
                <p>Mission & Vision</p>
              </div>
              <div className="pt-4 ">
                <h4 className="font-semibold mb-4 self-auto">Our Office</h4>
                <p>Maranga , Purnia(854303) ,</p>
                <p>Near Mahindra Showroom</p>
                <p>and Near Maranga Dhaba</p>
              </div>
            </div>
            <hr />
            <div className="grid sm:grid-flow-col  justify-between  mt-2 pb-4 pt-4">
              <div>
                <p>
                  &copy; 2023 Singh Car Trade - Best Used Car Dealer.
                </p>
              </div>
              <div>
                <p>
                  Terms & Conditions <span>Legal Notice</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
