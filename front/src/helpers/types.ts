export interface IProducts {
  id: number;
  name: string;
  description: string;
  price?: number;
  stock?: number;
  image: string;
  category?: Category;
}

export interface IProductsToCart {
  id: number;
  name: string;
  description: string;
  price?: number;
  stock?: number;
  image: string;
  category?: Category;
  amount: number;
}

export interface IUser {
  name?: string;
  email: string;
  address?: string;
  phone?: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Orders {
  id: number;
  status: string;
  date: Date;
  products: IProducts[];
}

export interface UserSessionProps {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  token: string;
}

export interface BannerProps {
  img: string;
  text: string;
  title: string;
}

export interface handleProp {
  values: IUser;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  url: string;
  titleSwal: string;
  textSwal: string;
  textError: string;
}

export interface PaginationProps {
  productsPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalProducts: number | undefined;
}

export interface EmailData {
  to: string;
  name:string
  total: number;
  orders:Orders
  products: IProductsToCart[]
}

export interface ContextProps {
  dataUser: UserSessionProps | null;
  setDataUser: (dataUser: UserSessionProps | null) => void;
}

