import PATHROUTES from "@/helpers/PathRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CartEmpty: React.FC = () => {
  return (
    <div className=" bg-custom-white flex flex-col items-center py-7 rounded">
      <Image src="/bolso.png" alt="cartEmpty" width={96} height={96} loading="lazy"/>
      <div className="gap-3 mt-4 flex flex-col items-center px-1">
        <p className="font-semibold text-xl">¡Inicia un carrito de compras!</p>
        <p className="text-custom-grey font-light">
          Si agregas varios productos obtienes envio gratis
        </p>
        <Link
          href={PATHROUTES.HOME}
          className="border border-custom-blue text-custom-blue py-2 px-3 rounded-xl hover:text-custom-white hover:bg-custom-blue mt-3"
        >
          Descubrir productos
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
