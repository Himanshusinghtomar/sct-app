import Header from "@/components/Header";
import Help from "@/components/Help";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import React from "react";
import Contact from "@/components/Contact";
import AppLayout from "@/layout/AppLayout";

const services = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#171718]  to-[#76777a]">
        <div className="max-w-[1600px] m-auto">
          <Header bgColor=""/>
          <div className="px-5 text-center mt-10 mb-12 py-20">
            <p className=" font-semibold text-light-orange text-2xl">Used Car Dealer </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">
              Purchase and Sales
            </h1>
            <p className="lg:max-w-sm m-auto mt-3 max-w-sm text-light-orange/75">
              we can help cut down costs and improve your customer support
              channels
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className="flex items-center gap-4  mt-24 mb-24  justify-between flex-wrap ">
          <div className="sm:order-last lg:order-first border-l-2 border-b-2 rounded-3xl p-3 m-2 border-light-orange">
            <Image
              src={"/assets/del03.jpeg"}
              alt="Group of people"
              width={650}
              height={400}
              className=" lg:w-[400px] lg:h-[440px] md:w-[400px] md:h-[440px] sm:h-[440px] sm:w-[400px]  rounded-3xl border-blue-500 "
            />
          </div>
          <div className="sm:order-first lg:order-last md:order-first px-5 ">
            <p className=" font-semibold text-light-orange  text-2xl mb-5">Why we ?</p>
            <h1 className="text-5xl mb-5 font-bold">Why Choose Us?</h1>
            <h4 className="text-2xl max-w-xl mb-8">
              Best Used Car Dealer.
            </h4>
            <p className="max-w-2xl">
            Offer a wide range of high-quality used cars that are thoroughly inspected and serviced to ensure reliability and customer satisfaction.Provide a diverse selection of used cars from different manufacturers to cater to various customer preferences and budgets.Price the vehicles competitively based on market trends, condition, mileage, and other factors to attract potential buyers and stay ahead of the competition.Offer flexible financing options to make it easier for customers to purchase a used car. Partner with financial institutions or provide in-house financing services.
            </p>
          </div>
        </div>
      </AppLayout>
        <Testimonial />
        <div className="bg-gradient-to-r from-[#171718]  to-[#76777a] py-5">
          <AppLayout>
              <Help />
          </AppLayout>
          
        </div>
        
        <Contact/>
      
    </div>
  );
};

export default services;
