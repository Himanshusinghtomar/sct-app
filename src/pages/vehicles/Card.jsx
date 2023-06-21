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
              <Link href={`/vehicles/${product.brand}`} passHref>
                <Image
                key={uuidv()}
                  src={product.coverImage}
                  alt={product.brand}
                  width={300}
                  height={300}
                  className=" rounded-2xl"
                />
              </Link>
              </div>
              <div>
                <p>{product.brand} &nbsp; | &nbsp;{product.model}</p>
              </div>
              <Link href={`/vehicles/${product.brand}`} passHref>
                <span aria-hidden="true" className=" hover:text-light-orange" />
                {product.brand}
              </Link>
              <div className="mt-5">
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
