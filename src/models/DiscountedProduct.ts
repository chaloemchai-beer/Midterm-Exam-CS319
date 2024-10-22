import { Product } from './Product';

export class DiscountedProduct extends Product {
  constructor(
    name: string,
    price: number,
    category: string,
    private readonly discountRate: number,
  ) {
    super(name, price, category);
    if (discountRate < 0 || discountRate > 1) {
      throw new Error('Discount rate must be between 0 and 1');
    }
  }

  override getProductInfo(): string {
    const discountedPrice = this.calculateDiscountedPrice();
    return `${super.getProductInfo()} - Discount: ${
      this.discountRate * 100
    }% - Final Price: $${discountedPrice.toFixed(2)}`;
  }

  private calculateDiscountedPrice(): number {
    return this.getPrice() * (1 - this.discountRate);
  }

  getDiscountRate(): number {
    return this.discountRate;
  }

  getFinalPrice(): number {
    return this.calculateDiscountedPrice();
  }
}