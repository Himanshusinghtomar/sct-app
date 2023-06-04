import Category from "@/components/Category";
import Header from "@/components/Header";
import Job from "@/components/Job";
import React, { useState } from "react";
import { v4 as uuidv } from "uuid";
import { category, jobPostings } from "@/_mock/jobPostings";
import AppLayout from "@/layout/AppLayout";
import JobMob from "@/components/JobMob";

const career = () => {
  const [filteredJob, setfilteredJob] = useState(jobPostings);
  const handleFilter = (e) => {
    const jobs =
      e.target.value !== "All"
        ? jobPostings.filter((item) => item.category === e.target.value)
        : jobPostings;
    console.log(jobs);
    if (jobs.length === 0) {
      alert("No reord Found");
      return false;
    } else {
      setfilteredJob(jobs);
    }
  };
  return (
    <>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-[1600px] m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">Open Jobs</p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              Available Jobs Opening
            </h1>
            <p className="lg:max-w-xl m-auto mt-3">
              Opening Job Roles from our company
            </p>
          </div>
        </div>
      </div>
      <AppLayout>
        <div className="lg:hidden md:hidden sm:hidden block">
          <JobMob job={filteredJob} />
        </div>
        <div className="py-20 lg:block md:block sm:block hidden">
          <div className=" flex flex-row gap-4 justify-center items-center px-5">
            {category?.map((item) => (
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
          <Job job={filteredJob} />

          <div className="text-center">
            <button className="inline-block rounded-full bg-neutral-800 mr-2 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
              Load More
            </button>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default career;
