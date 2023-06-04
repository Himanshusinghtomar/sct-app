import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuidv } from "uuid";

const Card = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 px-7 m-10 ">
      {products?.map((product) => (
        <div key={uuidv()}>
          <div className="flex justify-evenly ">
            <div className="max-w-[300px] rounded-lg  shadow hover:shadow-lg hover:border-2 border-light-orange p-4 ">
              <div className="w-full h-[204px]   grid content-center	justify-center">
              <Link href={`/blogs/${product.title}`} passHref>
                <Image
                  src={product.headingImg}
                  alt={product.title}
                  width={300}
                  height={300}
                  className=" rounded-2xl"
                />
              </Link>
              </div>
              <div>
                <p>Business &nbsp; | &nbsp;{product.date}</p>
              </div>
              <Link href={`/blogs/${product.title}`} passHref>
                <span aria-hidden="true" className=" hover:text-light-orange" />
                {product.title}
              </Link>
              <div className="mt-5">
                <div className="flex justify-start items-center gap-3 mt-5">
                  <div>
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50&q=80"
                      }
                      alt="img"
                      width={40}
                      height={40}
                      className="rounded-full "
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-lg font-semibold">
                      Adrian Nolan
                    </h2>
                    <p className="text-sm">Technology Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
