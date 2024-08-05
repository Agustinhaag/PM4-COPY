import React from "react";
import Banner from "@/components/home/Banner";
import { IProducts } from "@/helpers/types";
import { productsData } from "@/helpers/fetchProducts";
import ShopProducts from "@/components/home/ShopProducts";

export const Home: React.FC = async () => {
  const products: IProducts[] | undefined = await productsData();

  return (
    <main className="">
      <Banner />
      <section className="px-4 ">
        <h2
          className="text-center pt-4 pb-10 underline-offset-2 text-2xl"
          style={{ textDecoration: "1.5px underline #FBA14D" }}
        >
          Nuestros productos
        </h2>
        <ShopProducts products={products} />
      </section>
    </main>
  );
};

export default Home;
