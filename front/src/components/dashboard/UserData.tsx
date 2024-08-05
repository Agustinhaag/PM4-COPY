"use client";
import { Orders } from "@/helpers/types";
import React, { useEffect, useState } from "react";
import { FaAddressCard, FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { fetchOrders } from "../../helpers/fetchOrders";
import { useAuth } from "@/context/AuthContext";
import OrderCard from "./OrderCard";

const UserData: React.FC = () => {
  const [orders, setOrders] = useState<Orders[] | undefined>([]);
  const { dataUser } = useAuth();

  useEffect(() => {
    if (dataUser) {
      fetchOrders(dataUser?.token)
        .then((res) => setOrders(res))
        .catch((error) => console.log(error));
    }
  }, [dataUser]);

  return (
    <div className="flex flex-col md:flex-row w-full justify-around px-5 gap-2">
      <div
        className="mb-3 mt-5 md:w-2/5 w-4/5 md:mx-0 mx-auto flex items-center py-7 rounded-3xl bg-cover min-w-[340px] min-h-72 h-full"
        style={{ backgroundImage: "url(/fondo-form.jpg)" }}
      >
        <div className="flex flex-col gap-7 w-4/5 mx-auto items-start text-custom-white">
          <div className="flex justify-between items-center  text-left text-lg font-extralight">
            <span className="mr-2 text-custom-grey text-3xl">
              <FaAddressCard />
            </span>
            <span className="font-bold mr-1.5 ">Nombre: </span>
            {dataUser?.name}
          </div>
          <div className="flex justify-between items-center text-left text-lg font-extralight">
            <span className="mr-2 text-custom-grey text-3xl">
              <MdEmail />
            </span>
            <span className="font-bold mr-1.5 ">Email: </span> {dataUser?.email}
          </div>
          <div className="flex justify-between items-center text-left text-lg font-extralight">
            <span className="mr-2 text-custom-grey text-3xl">
              <FaHome />
            </span>
            <span className="font-bold mr-1.5 ">Dirección: </span>
            {dataUser?.address}
          </div>
          <div className="flex justify-between items-center text-left text-lg font-extralight">
            <span className="mr-2 text-custom-grey text-3xl">
              <FaPhone />
            </span>
            <span className="font-bold mr-1.5 ">Teléfono:</span>
            {dataUser?.phone}
          </div>
        </div>
      </div>
      <div
        className="md:w-3/5 w-4/5 min-w-72 md:mx-0 mx-auto mb-3 mt-5 bg-custom-white bg-opacity-75 h-full rounded-lg min-h-32 overflow-y-auto"
        style={{
          maxHeight: "80vh",
        }}
      >
        <h2 className="font-semibold text-xl text-center pt-2">
          Historial de compras
        </h2>
        {orders && orders.length ? (
          <div className="flex flex-col pb-4">
            {orders.map((order: Orders, index: number) => (
              <OrderCard order={order} key={order.id} index={index} />
            ))}
          </div>
        ) : (
          <p className="font-light pl-1.5">
            No posee ordenes de compras realizadas aun.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserData;
