export class Product {
  private static productCount: number = 0;  // Tracks total number of products
  private readonly name: string;
  private price: number;
  private readonly category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
    Product.productCount++;  // Increment count whenever a new product is created
  }

  updatePrice(newPrice: number): void {
    this.price = newPrice;
  }

  getProductInfo(): string {
    return `${this.name} - $${this.price.toFixed(2)} - ${this.category}`;
  }

  static getTotalProducts(): number {
    return Product.productCount;
  }

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }

  getCategory(): string {
    return this.category;
  }
}
