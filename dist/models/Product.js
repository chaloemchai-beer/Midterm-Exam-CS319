"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        Product.productCount++; // Increment count whenever a new product is created
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
    getProductInfo() {
        return `${this.name} - $${this.price.toFixed(2)} - ${this.category}`;
    }
    static getTotalProducts() {
        return Product.productCount;
    }
    getPrice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
    getCategory() {
        return this.category;
    }
}
exports.Product = Product;
Product.productCount = 0; // Tracks total number of products
