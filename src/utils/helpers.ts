import { Customer } from '../types/types';
import { Product } from "../models/Product"

export function getCustomerInfo(customer: Customer): string {
  const totalOrders = customer.orders.reduce((sum, order) => sum + order.length, 0);
  return `Customer: ${customer.name}\nEmail: ${customer.email}\nTotal Orders: ${customer.orders.length}\nTotal Items: ${totalOrders}`;
}

export function createPriceMultiplier(multiplier: number): (product: Product) => number {
  return (product: Product): number => product.getPrice() * multiplier;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}