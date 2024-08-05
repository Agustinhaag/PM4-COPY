"use client";
import PATHROUTES from "@/helpers/PathRoutes";
import { IProducts, Orders } from "@/helpers/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { IoMdClose } from "react-icons/io";

const OrderDetails: React.FC<{
  viewOrderDetail: boolean;
  setViewOrderDetail: React.Dispatch<React.SetStateAction<boolean>>;
  order: Orders;
}> = ({ setViewOrderDetail, viewOrderDetail, order }) => {
  return (
    <>
      {viewOrderDetail && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center">
          <div
            className="w-1/2 min-h-28 bg-custom-white relative rounded p-5 overflow-y-auto"
            style={{
              boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
              maxHeight: "85vh",
            }}
          >
            <div className="flex items-center mb-5 pb-5 border-b border-custom-grey w-full ">
              <h3 className="font-semibold text-2xl">
                Detalle orden
              </h3>
            </div>
            <button
              onClick={() => setViewOrderDetail(!viewOrderDetail)}
              className="absolute top-5 right-5 py-1 px-1.5 transition-all text-custom-orange border border-custom-orange bg-transparent rounded-md hover:bg-custom-orange hover:text-custom-white hover:cursor-pointer"
            >
              <IoMdClose />
            </button>
            <div>
              <h3 className="text-xl font-light">Su orden:</h3>
              <div className="flex flex-col py-2 gap-2">
                <p className="font-semibold capitalize text-green-600">
                  <span className="font-extralight text-black pr-1">
                    Status:
                  </span>
                  {order.status}
                </p>
                <p className="font-semibold">
                  <span className="font-extralight pr-1">Fecha:</span>
                  {new Date(order.date).toLocaleDateString()}
                </p>
                <p className="font-semibold">
                  <span className="font-extralight pr-1">Hora:</span>
                  {new Date(order.date).toLocaleTimeString()}
                </p>
              </div>
              <div>
                <h3
                  className="text-center text-lg underline-offset-2 pb-5"
                  style={{ textDecoration: "1.5px underline #FBA14D" }}
                >
                  Productos seleccionados
                </h3>
                <div className="flex flex-wrap w-full">
                  {order.products.map((product: IProducts) => (
                    <div
                      key={product.id}
                      className="w-1/3 flex flex-col gap-1 text-center items-center"
                    >
                      <Link href={`${PATHROUTES.PRODUCTS}/${product.id}`}>
                        <Image
                          loading="lazy"
                          alt={product.name}
                          src={product.image}
                          width={100}
                          height={100}
                        />
                        <p className=" pt-2 font-medium text-lg">
                          {product.name}
                        </p>
                        <p className="font-normal">$ {product.price}.</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-3">
              <button
                onClick={() => setViewOrderDetail(!viewOrderDetail)}
                className=" p-2 transition-all text-custom-orange border border-custom-orange bg-transparent rounded-md hover:bg-custom-orange hover:text-custom-white hover:cursor-pointer"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
