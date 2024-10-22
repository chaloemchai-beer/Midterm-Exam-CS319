import { Product } from "../models/Product";

export interface Customer {
    id?: number;
    name: string;
    email: string;
    orders: Order[];
  }
  
  export type Order = Product[];
  
  export interface ProductResponse {
    products: {
      id: number;
      title: string;
      price: number;
      category: string;
      description: string;
    }[];
    total: number;
    limit: number;
  }