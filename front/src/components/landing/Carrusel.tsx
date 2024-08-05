"use client";
import React, { useEffect, useState } from "react";
import CardCarrusel from "./CardCarrusel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IProducts } from "../../helpers/types";
import useHorizontalScroll from "@/helpers/scrollCarrusel";
import { productsData } from "@/helpers/fetchProducts";
import Spinner from "../spinner/Spinner";

const Carrusel: React.FC = () => {
  const { containerRef, scrollRight, scrollLeft } = useHorizontalScroll();
  const [products, setProducts] = useState<IProducts[] | undefined>([]);
  useEffect(() => {
    productsData()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex items-center w-11/12 mx-auto h-full">
      <button
        id="flecha-izquierda"
        onClick={scrollLeft}
        className="flecha-izquierda left-0 border p-1.5 rounded-md text-lg"
        style={{
          boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <IoIosArrowBack />
      </button>
      <div
        ref={containerRef}
        className="contenedor-carrusel w-full h-full py-5 overflow-hidden scroll-smooth"
      >
        <div className="container-proyect h-full flex flex-grow flex-nowrap">
          {!products || products.length === 0 ? (
            <Spinner />
          ) : (
            products.map((item: IProducts) => (
              <CardCarrusel product={item} key={item.id} />
            ))
          )}
        </div>
      </div>
      <button
        id="flecha-derecha"
        onClick={scrollRight}
        className="flecha-derecha right-0 border p-1.5 rounded-md text-lg"
        style={{
          boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carrusel;
