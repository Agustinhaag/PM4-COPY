import React from "react";
import CardProducts from "./CardProducts";
import { IProducts } from "@/helpers/types";
import { getFirstThreeProducts } from "@/helpers/fetchProducts";
import Spinner from "../spinner/Spinner";

const ContainerProducts: React.FC = async () => {
  const products = await getFirstThreeProducts();

  return (
    <section className="bg-custom-white w-full py-6">
      <div className="flex flex-col w-10/12 mx-auto sm:gap-10 gap-16">
        {!products || products.length === 0 ? (
          <Spinner />
        ) : (
          products.map((product: IProducts) => (
            <CardProducts
              id={product.id}
              image={product.image}
              description={product.description}
              name={product.name}
              key={product.id}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ContainerProducts;
