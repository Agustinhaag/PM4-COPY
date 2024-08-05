import LoadCart from "@/components/cart/LoadCart";
import React from "react";

export const Cart: React.FC = () => {
  return (
    <main
      className="flex md:flex-row flex-col bg-cover w-full h-full"
      style={{ backgroundImage: "url(/fondo-gris.jpg)" }}
    >
      <LoadCart />
    </main>
  );
};

export default Cart;
