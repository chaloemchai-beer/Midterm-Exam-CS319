import { Product } from './Product';

export class Inventory<T extends Product> {
  private readonly items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  addItems(items: T[]): void {
    this.items.push(...items);
  }

  removeItem(item: T): boolean {
    const index = this.items.findIndex(
      (i) => i.getName() === item.getName()
    );
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  listItems(): T[] {
    return [...this.items];
  }

  getItemsByCategory(category: string): T[] {
    return this.items.filter((item) => item.getCategory() === category);
  }

  getExpensiveProducts(threshold: number = 100): T[] {
    return this.items.filter(item => item.getPrice() > threshold);
  }

  getProductNames(): string[] {
    return this.items.map(item => item.getName());
  }

  getTotalValue(): number {
    return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
  }

  getAveragePrice(): number {
    if (this.items.length === 0) return 0;
    return this.getTotalValue() / this.items.length;
  }

  clear(): void {
    this.items.length = 0;
  }
}