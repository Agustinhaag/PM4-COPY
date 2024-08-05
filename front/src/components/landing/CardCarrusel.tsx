"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PATHROUTES from "@/helpers/PathRoutes";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IProducts } from "@/helpers/types";
import { loadCart } from "@/helpers/sendCart";
import { useAuth } from "@/context/AuthContext";

const CardCarrusel: React.FC<{ product: IProducts }> = ({ product }) => {
  const { dataUser } = useAuth();
  return (
    <div className="proyecto flex flex-col mb-8 h-full">
      <Link href={`${PATHROUTES.PRODUCTS}/${product.id}`}>
        <div className="w-full relative pt-7">
          <Image
            loading="lazy"
            src={product.image}
            alt={product.name}
            className="w-1/2 h-44 mx-auto min-w-28"
            height={224}
            width={96}
          />
          <p className="absolute text-custom-small sm:text-xs top-0 right-5 bg-custom-orange py-0.5 px-2 sm:px-3 text-custom-white">
            NUEVO
          </p>
        </div>
      </Link>
      <div className="info-proyecto flex gap-2 flex-col w-full p-2.5 ">
        <p className="text-custom-grey text-xs">{product.category?.name}</p>
        <h4 className="font-semibold">{product.name}</h4>
        <p className="text-custom-grey">$ {product.price}.-</p>
        <p className="text-custom-blue text-xs">3 CUOTAS SIN INTERÉS</p>
        <div className="flex w-2/5 mx-auto justify-between mt-3 min-w-44">
          <Link
            href={`${PATHROUTES.PRODUCTS}/${product.id}`}
            className="bg-none border border-custom-orange text-custom-orange py-1 px-4 rounded-xl text-sm hover:bg-custom-orange hover:text-custom-white"
          >
            Ver más
          </Link>
          <button
            onClick={() => loadCart(product, 1, dataUser)}
            className="bg-custom-orange border-custom-orange border text-custom-white py-1 px-4 rounded-xl text-lg hover:bg-transparent hover:text-custom-orange"
          >
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarrusel;
