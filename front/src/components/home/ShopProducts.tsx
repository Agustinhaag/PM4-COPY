"use client";
import React, { useState } from "react";
import Spinner from "../spinner/Spinner";
import { IProducts } from "@/helpers/types";
import CardCarrusel from "../landing/CardCarrusel";
import Pagination from "./Pagination";

const ShopProducts: React.FC<{ products: IProducts[] | undefined }> = ({
  products,
}) => {
  const totalProducts: number | undefined = products?.length;
  const [productsPage, setProductsPage] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const lastIndex: number = currentPage * productsPage;
  const firstIndex: number = lastIndex - productsPage;
  return (
    <>
      <div className="container-proyect-home flex flex-wrap w-11/12 mx-auto">
        {!products || products.length === 0 ? (
          <Spinner />
        ) : (
          products
            .map((item: IProducts) => (
              <CardCarrusel product={item} key={item.id} />
            ))
            .slice(firstIndex, lastIndex)
        )}
      </div>
      <Pagination
        productsPage={productsPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};

export default ShopProducts;
