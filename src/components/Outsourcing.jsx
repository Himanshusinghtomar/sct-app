import Image from "next/image";
import React from "react";

const Outsourcing = () => {
  return (
    <div className="">
      <div>
        <h4 className="text-center text-2xl mb-6">
          Trusted by major market players
        </h4>
        <div className="flex justify-evenly flex-wrap ">
          <Image
            src={"/assets/logos/vector (19).png"}
            alt="medium logo"
            width={265}
            height={41}
            className="m-4"
          />
          <Image
            src={"/assets/logos/vector (20).png"}
            alt="medium logo"
            width={265}
            height={41}
            className="m-4"
          />
          <Image
            src={"/assets/logos/vector (21).png"}
            alt="medium logo"
            width={265}
            height={41}
            className="m-4"
          />
          <Image
            src={"/assets/logos/vector (22).png"}
            alt="medium logo"
            width={265}
            height={41}
            className="m-4"
          />
        </div>
      </div>
      <div className="px-5 mt-16">
        <p className=" font-semibold text-[#F9AF82] text-2xl text-center">
          Customer Service AgencyTestimonial
        </p>
        <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl text-center font-bold">
          Outsourcing your customer support <br />
          has never been this easy
        </h1>
      </div>
      {/* Card for out sourcing  start here */}
      <div className="flex justify-evenly flex-wrap mt-20 mb-20">
        <div className="max-w-[300px]  rounded-lg ">
          <div className=" w-full h-[204px]  grid content-center	justify-center">
            <Image
              src={"/assets/image 1.png"}
              alt="sms"
              width={300}
              height={300}
              className=" rounded-2xl"
            />
          </div>
          <div>
            <p>Business &nbsp; | &nbsp;22 Oct,2020</p>
          </div>
          <div className="mt-5">
            <a href="#">
              <h5 className="mb-2 text-xl  font-bold  text-gray-900">
                How Blockchain is Changing the Way We Do Business
              </h5>
            </a>
            <div className="flex justify-start items-center gap-3 mt-5">
              <div>
                <Image
                  src={"/assets/man02.jpg"}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-full "
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-xl font-semibold">
                  Robert Greyson
                </h2>
                <p>IT Sales Executive</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className="w-full h-[204px]   grid content-center	justify-center">
            <Image
              src={"/assets/image 1 (1).png"}
              alt="sms"
              width={300}
              height={300}
              className=" rounded-2xl"
            />
          </div>
          <div>
            <p>Business &nbsp; | &nbsp;21 Sep,2020</p>
          </div>
          <div className="mt-5">
            <a href="#">
              <h5 className="mb-2 text-xl  font-bold  text-gray-900">
                How Digital Transformation is Reshaping the Business
              </h5>
            </a>
            <div className="flex justify-start items-center gap-3 mt-5">
              <div>
                <Image
                  src={"/assets/man03.jpg"}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-full "
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-xl font-semibold">
                  Carter Isaac
                </h2>
                <p>Network Analyst</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className=" w-full h-[204px]  grid content-center	justify-center">
            <Image
              src={"/assets/image 1 (2).png"}
              alt="sms"
              width={300}
              height={300}
              className=" rounded-2xl"
            />
          </div>
          <div>
            <p>Web Design &nbsp; | &nbsp;22 Oct,2020</p>
          </div>
          <div className="mt-5">
            <a href="#">
              <h5 className="mb-2 text-xl  font-bold  text-gray-900">
                The Importance of User Experience (UX) in Website
              </h5>
            </a>
            <div className="flex justify-start items-center gap-3 mt-5">
              <div>
                <Image
                  src={"/assets/man01.jpg"}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-full "
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-xl font-semibold">
                  Adrian Nolan
                </h2>
                <p>Technology Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;
