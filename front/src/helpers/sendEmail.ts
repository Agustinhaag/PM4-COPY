import { EmailData, IProductsToCart } from "./types";

export const sendEmail = async (
  data: any,
  total: number,
  products: IProductsToCart[]
) => {
  const dataEmail: EmailData = {
    total: total,
    to: data.user.email,
    name: data.user.name,
    orders: {
      date: data.date,
      id: data.id,
      products: data.products,
      status: data.status,
    },
    products: products,
  };
  await fetch("/api/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataEmail),
  });
};
