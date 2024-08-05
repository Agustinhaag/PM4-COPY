import React from "react";

const FAQ: React.FC = () => {
  return (
    <section className="w-1/2 mx-auto pb-5 min-w-72">
      <h2 className="text-center text-custom-white text-2xl my-2">FAQ</h2>
      <div className="w-full justify-between flex gap-4 bg-custom-white opacity-90">
        <div className="flex flex-col">
          <div className="bg-custom-orange text-custom-white p-2 font-extralight">
            <h3 className="text-center font-semibold">Productos</h3>
            <p>¿Qué tipos de productos venden?</p>
            <p>¿Cuáles son los costos de envío?</p>
          </div>
          <div className="text-custom-orange flex font-extralight px-2 pb-2">
            <ul className="flex flex-col gap-2">
              <li>
                ¿Dónde puedo ver las especificaciones técnicas de los productos?
              </li>
              <li>¿Ofrecen garantía en los productos? ¿Por cuánto tiempo?</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-custom-orange text-custom-white p-2 font-extralight">
            <h3 className="text-center font-semibold">Servicios</h3>
            <p>¿Cómo puedo contactar al servicio de atención al cliente?</p>
          </div>
          <div className="text-custom-orange flex font-extralight px-2 pb-2">
            <ul className="flex flex-col gap-2">
              <li>¿Puedo cancelar mi pedido una vez realizado?</li>
              <li>¿Ofrecen servicio técnico o reparaciones?</li>
              <li>¿Cómo puedo solicitar una devolución o cambio?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
