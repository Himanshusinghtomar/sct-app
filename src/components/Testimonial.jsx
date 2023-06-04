import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv } from "uuid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination , Autoplay } from "swiper";
import Image from "next/image";
import { testimonials } from "@/_mock/testimonial";

// init Swiper:

const Testimonial = () => {
  return (
    <div className="py-5">
      <div className="px-5">
        <p className=" font-semibold text-[#20BFB6] text-2xl">Testimonial</p>
        <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
          What our clients saying
          <br />
          about Us ?
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay ={{
            delay: 2000,
            disableOnInteraction: false
        }}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
        >
          {testimonials?.map((test) => (
            <SwiperSlide key={uuidv()}>
              <div className="max-w-md py-4 h-80 px-8 bg-white shadow-lg rounded-lg my-20 relative">
                <div className="flex justify-center md:justify-end -mt-16">
                  <div className="w-20 h-20  bg-black rounded-full text-9xl flex justify-center object-cover">
                    <Image
                        src={"/assets/navlogo.png"}
                        alt="img"
                        width={70}
                        height={30}
                        className="rounded-full"
                      />
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-1">
                    <div>
                      <Image
                        src={"/assets/womenceo.jpg"}
                        alt="img"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-gray-800 lg:text-3xl md font-semibold">
                        Sophia Ava
                      </h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 lg:py-5 md:py-4 sm:py-3  lg:text-base sm:text-base text-xs leading-[14px]">
                    {test.testimonial}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
