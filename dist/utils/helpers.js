"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerInfo = getCustomerInfo;
exports.createPriceMultiplier = createPriceMultiplier;
exports.formatPrice = formatPrice;
function getCustomerInfo(customer) {
    const totalOrders = customer.orders.reduce((sum, order) => sum + order.length, 0);
    return `Customer: ${customer.name}\nEmail: ${customer.email}\nTotal Orders: ${customer.orders.length}\nTotal Items: ${totalOrders}`;
}
function createPriceMultiplier(multiplier) {
    return (product) => product.getPrice() * multiplier;
}
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}
