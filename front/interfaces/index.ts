interface Credential {
    idCredential: number;
    password: string;
  }
  
  interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
  }
  
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
  }
  
  interface Order {
    id: number;
    status: string;
    date: Date;
    user: User;
    products: Product[];
  }
  