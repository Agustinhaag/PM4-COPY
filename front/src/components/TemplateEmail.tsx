import { IProductsToCart, Orders } from "@/helpers/types";
import React from "react";

export const TemplateEmail: React.FC<{
  order: Orders;
  total: number;
  name: string;
  products: IProductsToCart[];
}> = ({ total, order, name, products }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ fontWeight: "normal" }}>
        Hola! <span style={{ fontStyle: "italic" }}>{name}</span>, te enviamos
        el detalle de tu orden:
      </h2>
      <div>
        <h3
          style={{
            textDecoration: "1.5px underline #FBA14D",
            textUnderlineOffset: "2px",
          }}
        >
          Detalle orden
        </h3>
      </div>

      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div>
            <span>Status: </span>
            <span
              style={{
                color: "green",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {order.status}
            </span>
          </div>
          <div>
            <span>Fecha: </span>
            <span style={{ fontWeight: "bold" }}>
              {new Date(order.date).toLocaleDateString()}
            </span>
          </div>
          <div>
            <span>Hora: </span>
            <span style={{ fontWeight: "bold" }}>
              {new Date(order.date).toLocaleTimeString()}
            </span>
          </div>
        </div>
        <div>
          <h3
            style={{
              textDecoration: "1.5px underline #FBA14D",
              textUnderlineOffset: "2px",
            }}
          >
            Productos seleccionados
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
            {products.map((product: IProductsToCart) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <p>{product.name}</p>
                <p style={{ fontWeight: "normal" }}>
                  Precio:
                  <span style={{ fontWeight: "bold" }}>${product.price}.</span>
                </p>
                <p style={{ fontWeight: "normal" }}>
                  Cantidad:
                  <span style={{ fontWeight: "bold" }}>{product.amount}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <h3 style={{ fontWeight: "normal" }}>
          Monto total abonado:
          <span style={{ fontWeight: "bold" }}>${total}.-</span>
        </h3>
      </div>
      <div>
        <p>¡Lo invitamos a visitarnos nuevamente!</p>
        <p>Atentamente AH-Tech team.</p>
      </div>
    </div>
  );
};

export default TemplateEmail;
