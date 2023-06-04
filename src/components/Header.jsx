import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  {
    title: "Services",
    path: "#services",
    current: false,
  },
  {
    title: "Blogs",
    path: "/blogs",
    current: false,
  },
  {
    title: "Career",
    path: "/career",
    current: false,
  },
  {
    title: "Company",
    path: "/company",
    current: false,
  },
  {
    title: "FAQs",
    path: "/faqs",
    current: false,
  },
  {
    title: "Contact",
    path: "/contact",
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ bgColor }) => {
  return (
    <div className={`sticky  z-10  p-2 bg-[${bgColor}]`}>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto  px-2">
              <div className="relative flex h-16 items-center justify-center  ">
                <div className="absolute inset-y-0 left-0 flex  items-center sm:hidden ">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 lg:flex-none  items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link
                      href="/"
                      className="flex items-center justify-center gap-2"
                    >
                      <Image
                        src="/assets/navlogo.png"
                        height="30"
                        width="60"
                        alt="ant logo"
                      />
                      <span className=" hidden sm:flex text-lg font-bold text-[#20BFB6]">
                        Singh Car Trade
                      </span>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block self-center ">
                    <div className="flex space-x-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.title}
                          href={item.path}
                          className={classNames(
                            item.current
                              ? "bg-[#20BFB6] text-white"
                              : "text-white hover:bg-[#20BFB6] hover:text-black ",
                            "rounded-md px-3 py-2 text-sm font-semibold cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 shadow-lg rounded-md">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.title}
                    as="a"
                    href={item.path}
                    className={classNames(
                      item.current
                        ? "bg-[#20BFB6] text-white"
                        : "text-white hover:bg-[#20BFB6] hover:text-black",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
