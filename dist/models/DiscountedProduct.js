"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
const Product_1 = require("./Product");
class DiscountedProduct extends Product_1.Product {
    constructor(name, price, category, discountRate) {
        super(name, price, category);
        this.discountRate = discountRate;
        if (discountRate < 0 || discountRate > 1) {
            throw new Error('Discount rate must be between 0 and 1');
        }
    }
    getProductInfo() {
        const discountedPrice = this.calculateDiscountedPrice();
        return `${super.getProductInfo()} - Discount: ${this.discountRate * 100}% - Final Price: $${discountedPrice.toFixed(2)}`;
    }
    calculateDiscountedPrice() {
        return this.getPrice() * (1 - this.discountRate);
    }
    getDiscountRate() {
        return this.discountRate;
    }
    getFinalPrice() {
        return this.calculateDiscountedPrice();
    }
}
exports.DiscountedProduct = DiscountedProduct;
