import CardServices from "@/components/landing/CardServices";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import Banner from "@/components/landing/Banner";
import Carrusel from "@/components/landing/Carrusel";
import ContainerProducts from "@/components/landing/ContainerProducts";

const Landing: React.FC = () => {
  return (
    <main>
      <Banner />
      <section className="mb-3">
        <h2
          className="text-center pt-3 underline-offset-2 text-2xl"
          style={{ textDecoration: "1.5px underline #FBA14D" }}
        >
          Nuestros servicios
        </h2>
        <div className="flex w-9/12 mx-auto justify-between py-8 items-center sm:gap-0 gap-1">
          <CardServices icon={<FaTruck />} text="Envios a todo el país" />
          <CardServices icon={<LuShieldCheck />} text="Devolución gratis" />
          <CardServices icon={<BiSupport />} text="Soporte técnico 24/7" />
          <CardServices icon={<GiWallet />} text="Pago 100% seguro" />
        </div>
      </section>
      <ContainerProducts />
      <section className="flex flex-col items-center pt-12 h-full">
        <h2
          className="text-center py-3 underline-offset-2 text-2xl"
          style={{ textDecoration: "1.5px underline #FBA14D" }}
        >
          Últimos lanzamientos
        </h2>
        <Carrusel />
      </section>
    </main>
  );
};

export default Landing;
