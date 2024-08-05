import PATHROUTES from "@/helpers/PathRoutes";
import { IProducts } from "@/helpers/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProducts: React.FC<IProducts> = ({
  id,
  image,
  name,
  description,
}) => {
  return (
    <div className="flex sm:flex-row flex-col cont-product w-full items-center md:gap-0 gap-3">
      <div className="w-2/5 flex justify-center">
        <Image
        loading="lazy"
          src={image}
          alt={name}
          width={224}
          height={240}
          className="min-w-32"
        />
      </div>
      <div className="w-3/5 flex flex-col gap-3 items-start h-full">
        <h2 className="font-semibold text-3xl sm:text-start text-center w-full">
          {name}
        </h2>
        <p className="text-custom-grey">{description}</p>
        <div className="border w-11/12  border-custom-orange"></div>
        <div className=" flex sm:justify-start justify-center w-full">
          <Link
            href={`${PATHROUTES.PRODUCTS}/${id}`}
            className="mt-4 bg-custom-grey text-custom-white py-2 px-5 rounded-xl text-sm border-2 border-custom-grey hover:bg-custom-white hover:text-custom-grey hover:font-semibold"
          >
            COMPRAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
