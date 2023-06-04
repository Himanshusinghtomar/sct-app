import React, { useState } from "react";
import { experienceLevel } from "@/_mock/jobPostings";
import { v4 as uuidv } from "uuid";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const JobMob = ({job}) => {
    const [ratingsToggle, setRatingsToggle] = useState(true);
    return (
      <>
        <div className="">
            {job.map((item) => (
                <div key={uuidv} className="max-w-[300px] mt-5 mb-5  rounded-lg shadow-md hover:shadow-2xl p-4 m-auto">
                    <p className="font-bold">{item.title}</p>
                    <p className=" font-extralight">{item.experience_level}</p>
                    <p className="pt-5">{item.address}</p>

                </div>
            ))}
        </div>
      </>
    );
}

export default JobMob