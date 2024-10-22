"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    addItems(items) {
        this.items.push(...items);
    }
    removeItem(item) {
        const index = this.items.findIndex((i) => i.getName() === item.getName());
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    listItems() {
        return [...this.items];
    }
    getItemsByCategory(category) {
        return this.items.filter((item) => item.getCategory() === category);
    }
    getExpensiveProducts(threshold = 100) {
        return this.items.filter(item => item.getPrice() > threshold);
    }
    getProductNames() {
        return this.items.map(item => item.getName());
    }
    getTotalValue() {
        return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
    }
    getAveragePrice() {
        if (this.items.length === 0)
            return 0;
        return this.getTotalValue() / this.items.length;
    }
    clear() {
        this.items.length = 0;
    }
}
exports.Inventory = Inventory;
