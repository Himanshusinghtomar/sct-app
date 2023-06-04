import React, { useState } from "react";
import { experienceLevel } from "@/_mock/jobPostings";
import { v4 as uuidv } from "uuid";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
const Job = ({ job }) => {
  const [ratingsToggle, setRatingsToggle] = useState(true);
  return (
    <div className="flex flex-col sm:flex-row gap-8  px-5 py-20 ">
      <div className="basis-1/4 flex-initial">
        <div>
          <p className="my-3">Filter</p>
          <input
            type="text"
            name="SearchJob"
            id="searchJob"
            placeholder="JobSearch,Skill"
            className="border"
          />
        </div>
        <div>
          {/* ratings */}
          <div className="flex flex-col border-b mt-5">
            <div
              className="flex justify-between items-center cursor-pointer py-2  "
              onClick={() => setRatingsToggle(!ratingsToggle)}
            >
              <p className=" ">Experience</p>
              {ratingsToggle ? (
                <ChevronUpIcon className="h-5 text-indigo-600" />
              ) : (
                <ChevronDownIcon className="h-5 text-indigo-600" />
              )}
            </div>

            {ratingsToggle && (
              <div className="flex flex-col pb-1">
                <div className=" space-y-10">
                  <fieldset>
                    <div className=" space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="text-sm leading-6 ">
                          {experienceLevel?.map((experience) => (
                            <div key={uuidv()}>
                              <div className="flex h-6 items-center gap-2 py-2">
                                <input
                                  id={experience}
                                  name={experience}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />

                                <label
                                  htmlFor={experience}
                                  className="font-medium text-gray-900"
                                >
                                  {experience}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex-auto">
        <div className=" flex flex-col gap-4 my-4 ">
          {job.map((item) => (
            <div key={item.id} className="flex justify-between items-center ">
              <div className=" basis-1/2">
                <p>{item.title}</p>
                <span>{item.employment}</span>
              </div>
              <div className="basis-1/4 ">{item.experience_level}</div>
              <div className="basis-1/4 ">{item.job_mode}</div>
              <div className="basis-1/4 ">{item.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
