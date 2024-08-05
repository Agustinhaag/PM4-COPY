import { IProducts } from "./types";

const url = process.env.NEXT_PUBLIC_URL;
export const productsData = async (): Promise<IProducts[] | undefined> => {
  try {
    const response: Response = await fetch(`${url}/products/`, {
      next: { revalidate: 1800 },
    });
    const data: IProducts[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const productData = async (
  id: number
): Promise<IProducts | undefined> => {
  try {
    const data: IProducts[] | undefined = await productsData();
    const response: IProducts | undefined =
      data && data.find((product: IProducts) => product.id === Number(id));
    if (!response) throw new Error("Producto no encontrado");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getFirstThreeProducts = async (): Promise<
  IProducts[] | undefined
> => {
  try {
    const products: IProducts[] | undefined = await productsData();
    return products && products.slice(0, 3);
  } catch (error) {
    console.log(error);
  }
};
