import Swal from "sweetalert2";
import { IProducts, IProductsToCart, UserSessionProps } from "./types";
import PATHROUTES from "./PathRoutes";

export const loadCart = async (
  product: IProducts,
  amount: number = 1,
  dataUser: UserSessionProps | null
) => {
  if (!dataUser?.token) {
    Swal.fire({
      title: "No se pudo añadir el producto",
      text: "Debe iniciar sesión antes.",
      icon: "error",
      html: `<p>¿Desea loguearse? <a href=${PATHROUTES.LOGIN}> INGRESAR</a></p>`,
    });
    return;
  } else {
    const currentCartStr: string | null = localStorage.getItem(
      `Cart${dataUser?.id}`
    );
    let currentCart: IProductsToCart[] = [];

    if (currentCartStr) {
      currentCart = JSON.parse(currentCartStr);
    }
    const existingProduct = currentCart.findIndex(
      (item) => item.id === product.id
    );

    const totalAmountInCart = existingProduct !== -1
    ? currentCart[existingProduct].amount + amount
    : amount;

  
  if (totalAmountInCart >  product.stock!) {
    Swal.fire({
      title: "La cantidad excede el stock",
      text: `Solo hay ${product.stock} unidades disponibles de este producto.`,
      icon: "error",
    });
    return;
  }

    if (existingProduct !== -1) {
      currentCart[existingProduct].amount += amount;
    } else {
      currentCart.push({ ...product, amount });
    }
    if (amount > 0 ) {
      localStorage.setItem(`Cart${dataUser?.id}`, JSON.stringify(currentCart));
      Swal.fire({
        title: "Producto añadido al carrito",
        text: "Se agregó el producto exitosamente",
        icon: "success",
      });
    }
  }
};
export const deleteItemCart = async (
  id: number,
  products: IProductsToCart[],
  setProducts: React.Dispatch<React.SetStateAction<IProductsToCart[]>>,
  dataUser: UserSessionProps | null
) => {
  const newProducts = products.filter((product: IProductsToCart) => {
    return product.id !== id;
  });
  localStorage.setItem(`Cart${dataUser?.id}`, JSON.stringify(newProducts));
  setProducts(newProducts);
  Swal.fire({
    title: "Producto eliminado",
    text: "Se ha eliminado el producto del carrito exitosamente",
    icon: "warning",
  });
};

export const buyCartProducts = async (
  products: IProductsToCart[],
  setProducts: React.Dispatch<React.SetStateAction<IProductsToCart[]>>,
  setCart: React.Dispatch<React.SetStateAction<string | null>>,
  dataUser: UserSessionProps | null
) => {
  const url = process.env.NEXT_PUBLIC_URL;
  const idProducts: number[] = products.map(
    (product: IProductsToCart) => product.id
  );
  if (idProducts.length > 0) {
    try {
      const dataSend = { products: idProducts, userId: dataUser?.id };
      const response = await fetch(`${url}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${dataUser?.token}`,
        },
        body: JSON.stringify(dataSend),
      });
      const data = await response.json();

      if (response.ok) {
        setProducts([]);
        setCart(null);
        localStorage.removeItem(`Cart${dataUser?.id}`);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
