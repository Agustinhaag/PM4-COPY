"use client";
import { buyCartProducts } from "@/helpers/sendCart";
import { IProductsToCart } from "@/helpers/types";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";
import { sendEmail } from "@/helpers/sendEmail";

export const Resume: React.FC<{
  products: IProductsToCart[];
  setProducts: React.Dispatch<React.SetStateAction<IProductsToCart[]>>;
  setCart: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ products, setProducts, setCart }) => {
  const [total, setTotal] = useState<number>(0);
  const [sendEmailChecked, setSendEmailChecked] = useState<boolean>(false);
  const { dataUser } = useAuth();

  const handleBuyCart = () => {
    Swal.fire({
      title: "¡Ya casi es suya!",
      text: "Confirme para despachar su compra ✅",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await buyCartProducts(
          products,
          setProducts,
          setCart,
          dataUser
        );
        Swal.fire({
          title: "¡Operación exitosa!",
          text: "Compra realizada correctamente.",
          icon: "success",
        });
        if (sendEmailChecked) {
          await sendEmail(response, total, products);
        }
      } else {
        Swal.fire({
          title: "Operación cancelada",
          text: "No se ha realizado la compra.",
          icon: "error",
        });
      }
    });
  };

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = products.reduce(
        (acumulador: number, producto: IProductsToCart) => {
          if (producto.price !== undefined) {
            return acumulador + producto.price * producto.amount;
          } else {
            return acumulador;
          }
        },
        0
      );
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [products]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendEmailChecked(e.target.checked);
  };

  const totalQuantity = products.reduce(
    (acumulador: number, producto: IProductsToCart) => acumulador + producto.amount,
    0
  );

  return (
    <div className="md:w-1/3  w-11/12 mx-auto bg-custom-white md:my-10 mb-10 pt-1 pb-3 md:mr-3 rounded h-full">
      <p className="text-custom-grey font-light text-xl p-3">
        Resumen de compra
      </p>
      <div className="border border-custom-grey w-full"></div>
      <div>
        {products.length === 0 ? (
          <p className="text-custom-grey font-light text-sm p-3">
            Aquí verás el resumen de tu compra una vez que agregues productos.
          </p>
        ) : (
          <div className="p-3 flex flex-col gap-2">
            <div className="flex  w-full justify-between">
              <p className="font-light">Productos</p>
              <p className="font-semibold">{totalQuantity}</p>
            </div>
            <div className="flex  w-full justify-between">
              <p className="font-light">Envio</p>
              <p className="text-custom-blue">GRATIS</p>
            </div>
            <p className="font-light">
              Total a abonar: <span className="font-semibold">${total}</span>
            </p>
            <button
              className="bg-transparent mt-2 w-full text-custom-orange border border-custom-orange rounded-md py-1 px-2 hover:bg-custom-orange hover:text-custom-white hover:cursor-pointer"
              onClick={handleBuyCart}
            >
              Comprar
            </button>
            <div className="flex gap-1 items-center">
              <p className="text-sm">Recibir el detalle de mi compra</p>
              <input
                type="checkbox"
                name="sendEmail"
                id="sendEmail"
                checked={sendEmailChecked}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
