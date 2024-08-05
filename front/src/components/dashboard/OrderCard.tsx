import { Orders } from "@/helpers/types";
import React, { useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import OrderDetails from "./OrderDetails";

const OrderCard: React.FC<{ order: Orders; index: number }> = ({
  order,
  index,
}) => {
  const [viewOrderDetail, setViewOrderDetail] = useState<boolean>(false);
  return (
    <div className="flex flex-col px-4 pt-3 gap-2 sm:gap-0">
      {index !== 0 && (
        <div className="border-t border-custom-grey w-full mb-2"></div>
      )}
      <div className="flex gap-1 items-center">
        <span className="text-custom-orange text-2xl">
          <CiShoppingTag />
        </span>
        <p className="font-normal">
          <span className="font-extralight">Orden Nº</span> {index + 1}
        </p>
      </div>

      <p className="font-normal text-green-600">
        <span className="font-extralight text-black">Status:</span>
        {order.status}
      </p>
      <p className="font-normal">
        <span className="font-extralight">Fecha de creaciòn:</span>
        {` ${new Date(order.date).toLocaleDateString()} - ${new Date(
          order.date
        ).toLocaleTimeString()}`}
      </p>
      <div className="flex justify-start">
        <button
          onClick={() => {
            setViewOrderDetail(!viewOrderDetail);
          }}
          className="bg-transparent text-sm mt-2 text-custom-orange border border-custom-orange rounded-lg py-1 px-2 hover:bg-custom-orange hover:text-custom-white hover:cursor-pointer"
        >
          Detalles
        </button>
      </div>
      <OrderDetails
        order={order}
        setViewOrderDetail={setViewOrderDetail}
        viewOrderDetail={viewOrderDetail}
      />
    </div>
  );
};

export default OrderCard;
