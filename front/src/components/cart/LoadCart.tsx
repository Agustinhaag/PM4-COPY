"use client";
import React, { useEffect, useState } from "react";
import CartEmpty from "./CartEmpty";
import CardCart from "./CardCart";
import { IProductsToCart } from "@/helpers/types";
import Resume from "./Resume";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";

export const LoadCart: React.FC = () => {
  const { dataUser } = useAuth();
  const [cart, setCart] = useState<string | null>(null);
  const [products, setProducts] = useState<IProductsToCart[]>([]);

  const emptyCart = () => {
    Swal.fire({
      title: "¿Está seguro/a de vaciar su carrito?",
      text: "Si lo elimina perderá sus productos almacenados",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar.",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setProducts([]);
        setCart(null);
        localStorage.removeItem(`Cart${dataUser?.id}`);
        Swal.fire({
          title: "¡Operación exitosa!",
          text: "Carrito eliminado exitosamente!.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Operación cancelada",
          text: "No se ha vaciado el carrito.",
          icon: "info",
        });
      }
    });
  };

  useEffect(() => {
    const cartData: string | null = localStorage.getItem(`Cart${dataUser?.id}`);
    if (cartData) {
      setCart(cartData);
      if (cart !== null) {
        setProducts(JSON.parse(cartData));
      }
    }
  }, [cart]);

  return (
    <>
      <div className="md:w-2/3 w-11/12 mx-auto md:mx-3  my-10">
        {products.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className="flex flex-col">
            <div className="">
              {products.map((product: IProductsToCart) => (
                <CardCart
                  product={product}
                  key={product.id}
                  products={products}
                  setProducts={setProducts}
                />
              ))}
            </div>
            <button
              className="bg-custom-orange text-custom-white p-1.5 rounded-md  hover:bg-orange-500 hover:cursor-pointer w-2/5 mx-auto"
              onClick={emptyCart}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
      <Resume products={products} setProducts={setProducts} setCart={setCart} />
    </>
  );
};

export default LoadCart;
