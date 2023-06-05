import Image from 'next/image'
import React from 'react'


const Cars = () => {
  return (
    <div className="mt-16 lg:p-4 p-2">
      <div>
        <p className="text-center font-semibold text-light-orange text-2xl">
          HOW IT WORK
        </p>
        <h1 className="text-center mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">
        Buy your desired car with following <br/>3 working steps
        </h1>
      </div>
      <div className="flex lg:justify-between justify-center flex-wrap mt-20">
        <div className="max-w-[300px]  rounded-lg ">
          <div className="rounded-t-lg w-full h-[204px] bg-[#FEEFE6] grid content-center	justify-center">
            <Image
              src={"/assets/location.png"}
              alt="sms"
              width={100}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold text-light-orange">
              Come to our Showroom !
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-white">
            Maranga Purnia,Bihar(854301) Near Mahindra Showroom .
            </p>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className="rounded-t-lg w-full h-[204px] bg-[#20BFB6]  grid content-center	justify-center">
            <Image
              src={"/assets/calendar-tick.png"}
              alt="sms"
              width={100}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold text-light-orange">
              Choose your desired Car ?
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-white">
            You can Pay as you want Cash/Loan.
            </p>
          </div>
        </div>
        <div className="max-w-[300px] rounded-lg">
          <div className="rounded-t-lg w-full h-[204px] bg-[#E6F8FE]  grid content-center	justify-center">
            <Image
              src={"/assets/car.png"}
              alt="sms"
              width={100}
              height={300}
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold  text-light-orange">
              Get Your Car Delivered on time .
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-white">
            We will deliver it  in few hours  if you buy in Cash and 2 days in Loan.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cars