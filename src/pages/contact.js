import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Header from "@/components/Header";
import AppLayout from "@/layout/AppLayout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#171718]  to-[#76777a]">
        <div className="max-w-app m-auto">
          <Header bgColor="gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-light-orange text-2xl">
              Contact & Help
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">
             Need Help?
            </h1>
            <p className="lg:max-w-xl m-auto mt-3 text-light-orange">
              We love to hear from you. Let us help you.
            </p>
          </div>
        </div>
      </div>

      <div className="isolate bg-white px-6 py-24 sm:py-24 lg:px-8">
        <div className=" flex justify-around flex-wrap mt-20 ">
          <div className=" lg:w-96">
            <form action="#" method="POST" className="">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="howdidyoufindus?"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    How did you find us?
                  </label>

                  <select
                    name="howdidyoufindus?"
                    id="howdidyoufindus?"
                    autoComplete="tel"
                    defaultValue={""}
                    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <optgroup>
                      <option value="">Direct Link</option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                    </optgroup>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="inline-block rounded-full bg-neutral-800 mr-2 px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:mt-0 md:mt-5 sm:mt-5 mt-5">
            <div className="mb-5 lg:mt-0 sm:mt-5 text-start">
              <h3 className="font-bold mb-5">Call Us</h3>
              <p>+91 9709884713</p>
              <p>+91 8092046369</p>
            </div>
            <div className="mb-5 lg:mt-0 sm:mt-5">
              <h3 className="font-bold mb-5">Address</h3>
              <p>Maranga , Purnia(854303)  ,</p>
              <p>Near Mahindra Showroom</p>
              <p>and Near Maranga Dhaba</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
