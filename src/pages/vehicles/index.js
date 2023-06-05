import React, { useState } from "react";
import { mockData, category } from "@/_mock/mockData";
import { carsData, brands } from "@/_mock/carsData";
import { v4 as uuidv } from "uuid";
import Card from "@/pages/vehicles/Card";
import Image from "next/image";
import Header from "@/components/Header";
import AppLayout from "@/layout/AppLayout";
const blog = () => {
  const [filteredBlog, setFilteredBlog] = useState(carsData);
  const handleFilter = (e) => {
    const mock =
      e.target.value !== "Shows All"
        ? carsData.filter((item) => item.brand === e.target.value)
        : carsData;

    if (mock.length === 0) {
      alert("No reord Found");
      return false;
    } else {
      setFilteredBlog(mock);
    }
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-[#171718]  to-[#76777a]">
        <div className="max-w-[1600px] m-auto">
          <Header bgColor=""/>
          <div className="px-5 text-center py-20 mb-12">
            <p className=" font-semibold text-light-orange text-2xl">vehicles</p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">
              Latest Vehicles
            </h1>
            <p className="lg:max-w-xl m-auto mt-3 text-light-orange/70">
              We love to hear from you. Let us help you.
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className=" flex flex-row gap-4 justify-center items-center px-5">
          {brands?.map((item) => (
            <div key={uuidv()}>
              <button
                value={item}
                onClick={(e) => handleFilter(e)}
                className="inline-block rounded-full border-2 border-light-orange px-6 pb-[6px] pt-2 text-xs font-medium  hover:bg-light-orange active:bg-light-orange focus:outline-none  focus:bg-light-orange"
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        <Card products={filteredBlog} />
        
        <div className="text-center mb-10">
          <button className="inline-block rounded-full bg-neutral-800 mr-2 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Load More
          </button>
        </div>
        {/* <div className="px-5 text-center mt-10 mb-12">
          <p className=" font-semibold text-[#F9AF82] text-2xl">Case Studies</p>
          <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
            Our Case Studies
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 place-items-center	 mt-20 mb-20">
          <div className="max-w-[300px]  rounded-lg shadow hover:shadow-2xl p-4 ">
            <div className=" w-full h-[204px]  grid content-center	justify-center">
              <Image
                src={"/assets/image 1.png"}
                alt="sms"
                width={300}
                height={300}
                className=" rounded-2xl"
              />
            </div>
            <div className="flex justify-between">
              <p className=" text-xl font-semibold">eCash</p>
              <div className="flex gap-3">
                <p className="">View Case Studie</p>
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
              </div>
            </div>
          </div>
          <div className="max-w-[300px] rounded-lg shadow hover:shadow-2xl p-4">
            <div className="w-full h-[204px]   grid content-center	justify-center">
              <Image
                src={"/assets/image 1 (1).png"}
                alt="sms"
                width={300}
                height={300}
                className=" rounded-2xl"
              />
            </div>
            <div className="flex justify-between">
              <p className=" text-xl font-semibold">Zohomail</p>
              <div className="flex gap-3">
                <p className="">View Case Studie</p>
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
              </div>
            </div>
          </div>
          <div className="max-w-[300px] rounded-lg shadow hover:shadow-2xl p-4">
            <div className=" w-full h-[204px]  grid content-center	justify-center">
              <Image
                src={"/assets/image 1 (2).png"}
                alt="sms"
                width={300}
                height={300}
                className=" rounded-2xl"
              />
            </div>
            <div className="flex justify-between">
              <p className=" text-xl font-semibold">Clouds</p>
              <div className="flex gap-3">
                <p className="">View Case Studie</p>
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
              </div>
            </div>
          </div>
          <div className="max-w-[300px]  rounded-lg shadow hover:shadow-2xl p-4">
            <div className=" w-full h-[204px]  grid content-center	justify-center">
              <Image
                src={"/assets/image 1.png"}
                alt="sms"
                width={300}
                height={300}
                className=" rounded-2xl"
              />
            </div>
            <div className="flex justify-between">
              <p className=" text-xl font-semibold">SureSale</p>
              <div className="flex gap-3">
                <p className="">View Case Studie</p>
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
              </div>
            </div>
          </div>
          <div className="max-w-[300px] rounded-lg shadow hover:shadow-2xl p-4">
            <div className="w-full h-[204px]   grid content-center	justify-center">
              <Image
                src={"/assets/image 1 (1).png"}
                alt="sms"
                width={300}
                height={300}
                className=" rounded-2xl"
              />
            </div>
            <div className="flex justify-between">
              <p className=" text-xl font-semibold">Ollyo</p>
              <div className="flex gap-3">
                <p className="">View Case Studie</p>
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
              </div>
            </div>
          </div>
          <div className="max-w-[300px] rounded-lg shadow hover:shadow-2xl p-4">
            <div className=" w-full h-[204px]  grid content-center	justify-center">
              <Image
                src={"/assets/image 1 (2).png"}
                alt="sms"
                width={300}
                height={300}
                className=" rounded-2xl"
              />
            </div>
            <div className="flex justify-between">
              <p className=" text-xl font-semibold">Evaly</p>
              <div className="flex gap-3">
                <p className="">View Case Studie</p>
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
              </div>
            </div>
          </div>
        </div> */}
      </AppLayout>
    </div>
  );
};

export default blog;
