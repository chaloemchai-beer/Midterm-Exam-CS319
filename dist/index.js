"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const DiscountedProduct_1 = require("./models/DiscountedProduct");
const Inventory_1 = require("./models/Inventory");
const helpers_1 = require("./utils/helpers");
const api_1 = require("./services/api");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Initialize inventory
            const inventory = new Inventory_1.Inventory();
            console.log('Fetching products from API...');
            const products = yield (0, api_1.fetchAllProducts)();
            inventory.addItems(products); // Assuming `addItems` is defined in Inventory to add multiple products
            // Add some local products
            const coffee = new Product_1.Product("Coffee", 30, "Drink");
            const orangeJuice = new Product_1.Product("Orange Juice", 50, "Drink");
            const discountedCoffee = new DiscountedProduct_1.DiscountedProduct("Premium Coffee", 40, "Drink", 0.15);
            inventory.addItem(coffee);
            inventory.addItem(orangeJuice);
            inventory.addItem(discountedCoffee);
            // Display inventory analysis
            console.log("\n--- Inventory Analysis ---");
            // Filter: Expensive products
            const expensiveProducts = inventory.listItems().filter(product => product.getPrice() > 500);
            console.log('\nExpensive Products (>$500):');
            expensiveProducts.forEach(product => console.log(`${product.getProductInfo()}: ${(0, helpers_1.formatPrice)(product.getPrice())}`));
            // Map: All product names
            const productNames = inventory.listItems().map(product => product.getProductInfo());
            console.log('\nAll Product Names:');
            console.log(productNames);
            // Create a customer with orders
            const customer = {
                name: "User Test",
                email: "Example@example.com",
                orders: [[coffee, orangeJuice], [discountedCoffee]]
            };
            console.log("\n--- Customer Information ---");
            console.log((0, helpers_1.getCustomerInfo)(customer));
            // Apply the price multiplier (example usage)
            const doublePrice = (0, helpers_1.createPriceMultiplier)(2);
            console.log(`\nDouble price of coffee: ${(0, helpers_1.formatPrice)(doublePrice(coffee))}`);
        }
        catch (error) {
            console.error('Error running application:', error);
        }
    });
}
// Run the application
main().catch(console.error);
