import Carrusel from "@/components/landing/Carrusel";
import React from "react";
import CardProductDetail from "@/components/products/CardProductDetail";

export const ProductDetail: React.FC<any> = ({ params }) => {
  const { id } = params;

  return (
    <main>
      <CardProductDetail id={id} />
      <section className="flex flex-col items-center h-full py-12">
        <h2 className="text-left pt-4 pb-10 font-bold text-2xl">
          Productos relacionados
        </h2>
        <Carrusel />
      </section>
    </main>
  );
};

export default ProductDetail;
