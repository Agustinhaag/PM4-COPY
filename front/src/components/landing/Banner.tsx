import PATHROUTES from "@/helpers/PathRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="bg-cover h-96"
      style={{ backgroundImage: "url(/fondo-landing.jpg)" }}
    >
      <div className="w-11/12 mx-auto flex items-center h-full">
        <div className="sm:w-3/5 w-full flex flex-col justify-between gap-3 text-custom-white items-start h-1/2 ">
          <h1 className="md:text-3xl text-xl font-semibold">
            ¡Bienvenidos, disfruta de las mejores ofertas!
          </h1>
          <p className="text-custom-grey md:text-base text-sm">
            Explora nuestra amplia gama de productos tecnológicos. Desde
            smartphones de última generación hasta accesorios innovadores,
            tenemos todo lo que necesitas para estar siempre conectado y al día
            con la tecnología. ¡No te pierdas nuestras ofertas especiales y
            lleva la innovación a tu hogar hoy mismo!
          </p>
          <Link
            href={PATHROUTES.HOME}
            className="border text-center py-1.5 px-2 w-32 rounded-3xl hover:bg-custom-white hover:text-black hover:cursor-pointer hover:font-semibold"
          >
            SHOP
          </Link>
        </div>
        <div className="sm:flex hidden justify-end w-2/5">
          <Image
          loading="lazy"
            alt="Auriculares"
            src={"/Auriculares.png"}
            width={230}
            height={230}
            className="w-7/12 min-w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
