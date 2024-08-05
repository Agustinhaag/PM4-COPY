"use client";
import { useAuth } from "@/context/AuthContext";
import { productData } from "@/helpers/fetchProducts";
import { loadCart } from "@/helpers/sendCart";
import { IProducts } from "@/helpers/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";

const CardProductDetail: React.FC<{ id: number }> = ({ id }) => {
  const [product, setProduct] = useState<IProducts | undefined>(undefined);
  const { dataUser } = useAuth();

  useEffect(() => {
    productData(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  const [cantidad, setCantidad] = useState<number>(0);

  const sumar = (): void => {
    if (product?.stock && product?.stock > cantidad) setCantidad(cantidad + 1);
  };

  const restar = (): void => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      {product ? (
        <section className="flex md:flex-row md:gap-2 flex-col w-11/12 mx-auto pt-9 ">
          <div className="md:w-2/5 w-full flex md:justify-end justify-center">
            <Image
            loading="lazy"
              src={product ? product.image : "/producto-default.png"}
              alt={product ? product.name : ""}
              className="md:w-10/12 w-4/5 md:min-w-72"
              width={369}
              height={369}
            />
          </div>
          <div className="md:w-3/5 w-full flex flex-col justify-center gap-4">
            <p className="text-custom-grey text-base">
              Categoria: {product.category?.name}
            </p>
            <h3 className="font-bold text-3xl">{product?.name}</h3>
            <p className="text-custom-grey font-semibold">
              {product?.description}
            </p>
            <p className="text-2xl">${product?.price}.-</p>
            <div className="flex sm:flex-row flex-col h-full gap-2 sm:h-7">
              <div className="flex gap-2 items-center">
                <button
                  className="bg-custom-grey hover:bg-black px-2.5 text-lg  text-custom-white"
                  onClick={restar}
                >
                  -
                </button>

                <input
                  type="text"
                  value={cantidad}
                  readOnly
                  className="px-2 w-9 h-7 py-3 border text-center"
                  id="cantidad"
                />
                <button
                  className="bg-custom-grey hover:bg-black text-lg px-2.5  text-custom-white"
                  onClick={sumar}
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  loadCart(product, cantidad, dataUser)
                }
                className="bg-custom-orange sm:mt-0 mt-2 text-custom-white px-2 border hover:bg-transparent hover:border-custom-orange hover:text-custom-orange sm:w-auto w-1/2 min-w-36"
              >
                Añadir al carrito
              </button>
            </div>
            <p className="text-custom-blue">
              <span
                className="underline-offset-1 pr-1"
                style={{ textDecoration: "1px underline #3CABE9" }}
              >
                Todos los metódos de pago
              </span>
              | 3 cuotas sin interés.
            </p>
            <p className="text-custom-grey">Stock: {product?.stock} Unidades</p>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center pt-10 bg-background">
          <div
            style={{ boxShadow: "0 0 10px #747474" }}
            className="bg-card text-card-foreground rounded-xl px-8 py-6   max-w-lg w-full"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-5xl">
                <TbAlertTriangleFilled />
              </div>
              <h2 className="text-2xl font-bold">
                ¡Oops! No encontramos tu producto.
              </h2>
              <p className="text-muted-foreground text-center">
                Por favor, te invitamos a visitar otros.
              </p>
              <Link
                href="/home"
                className=" rounded-lg border border-custom-orange bg-none px-6 py-1.5 text-sm font-medium text-custom-orange transition-colors hover:bg-custom-orange hover:text-custom-white"
              >
                SHOP
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProductDetail;
