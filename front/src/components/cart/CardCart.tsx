import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import { IProductsToCart } from "@/helpers/types";
import { deleteItemCart } from "@/helpers/sendCart";
import Link from "next/link";
import PATHROUTES from "@/helpers/PathRoutes";
import { useAuth } from "@/context/AuthContext";

export const CardCart: React.FC<{
  product: IProductsToCart;
  products: IProductsToCart[];
  setProducts: React.Dispatch<React.SetStateAction<IProductsToCart[]>>;
}> = ({ product, products, setProducts }) => {
  const { dataUser } = useAuth();
  return (
    <div className="flex flex-col w-full mb-2 bg-custom-white text-black py-3 rounded-sm">
      <p className="text-custom-grey ml-3">{product.category?.name}</p>
      <div className="border-t border-custom-grey w-full my-2"></div>
      <div className="flex justify-around p-3 items-center">
        <Link href={`${PATHROUTES.PRODUCTS}/${product.id}`}>
          <Image
            className="w-20"
            src={product.image}
            alt={product.name}
            width={100}
            loading="lazy"
            height={100}
          />
        </Link>
        <p className="font-semibold sm:text-base text-sm">{product.name}</p>
        <div className="flex flex-col items-center">
          <span className="font-semibold sm:text-base text-sm">
            {product.amount}
          </span>
          <p className="font-extralight hidden sm:flex">
            + {product.stock} disponibles
          </p>
        </div>
        <p className="font-semibold sm:text-base text-sm">${product.price}</p>
        <button
          className="border border-red-600 p-2 rounded-lg bg-transparent text-red-600 hover:bg-red-600 hover:text-custom-white hover:cursor-pointer"
          onClick={() =>
            deleteItemCart(Number(product.id), products, setProducts, dataUser)
          }
        >
          <FaTrashAlt />
        </button>
      </div>
      <div className="border-t border-custom-grey w-full my-2"></div>
      <div className="flex px-3 w-full justify-between">
        <p className="font-semibold">Envio</p>
        <p className="text-custom-blue">GRATIS</p>
      </div>
    </div>
  );
};

export default CardCart;
