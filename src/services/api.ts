import { Product } from '../models/Product';
import { ProductResponse } from '../types/types';

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=100');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as ProductResponse;
    
    return data.products.map(product => 
      new Product(
        product.title,
        product.price,
        product.category
      )
    );
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
