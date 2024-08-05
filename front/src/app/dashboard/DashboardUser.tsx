import PATHROUTES from "@/helpers/PathRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

import UserData from "@/components/dashboard/UserData";

export const DashboardUser: React.FC = () => {
  return (
    <main className="">
      <section
        className="bg-cover"
        style={{ backgroundImage: "url(/fondo-grisazul.jpg)" }}
      >
        <div
          className="bg-cover h-64 relative"
          style={{ backgroundImage: "url(/banner-profile.png)" }}
        >
          <Image
          loading="lazy"
            src="/default.jpg"
            alt="default.jpg"
            className="sm:w-64 w-56 mx-auto rounded-full sm:h-60 h-52 absolute sm:top-14 top-20 left-8"
            width={256}
            height={240}
          />
        </div>
        <h2
          className="text-black italic text-center text-3xl underline-offset-2 sm:mt-4 mt-9"
          style={{ textDecoration: "1.5px underline #FBA14D" }}
        >
          Mi perfil
        </h2>
        <UserData />

        <div className="flex justify-around min-w-48 w-3/12 mx-auto pb-4 items-center">
          <Link
            className=" font-semibold border border-custom-orange text-custom-orange hover:bg-custom-orange hover:text-custom-white bg-none rounded-3xl md:text-base md:py-2 md:px-5  text-sm py-1.5 px-4"
            href={PATHROUTES.HOME}
          >
            Regresar
          </Link>
          <Link
            href={PATHROUTES.CART}
            className="font-semibold border border-custom-orange text-custom-orange hover:bg-custom-orange hover:text-custom-white bg-none rounded-3xl md:text-2xl md:py-2 md:px-5  text-xl py-1.5 px-4"
          >
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DashboardUser;
