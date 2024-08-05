import { Orders } from "./types";

export const fetchOrders = async (token: string | undefined) => {
  const url = process.env.NEXT_PUBLIC_URL;
  try {
    const response = await fetch(`${url}/users/orders`,  {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
    const data: Orders[] = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
