import { Product } from './models/Product';
import { DiscountedProduct } from './models/DiscountedProduct';
import { Inventory } from './models/Inventory';
import { getCustomerInfo, createPriceMultiplier, formatPrice } from './utils/helpers';
import { fetchAllProducts } from './services/api';
import { Customer } from './types/types';

async function main() {
  try {
    // Initialize inventory
    const inventory = new Inventory<Product>();
    
    console.log('Fetching products from API...');
    const products = await fetchAllProducts();
    inventory.addItems(products); // Assuming `addItems` is defined in Inventory to add multiple products

    // Add some local products
    const coffee = new Product("Coffee", 30, "Drink");
    const orangeJuice = new Product("Orange Juice", 50, "Drink");
    const discountedCoffee = new DiscountedProduct("Premium Coffee", 40, "Drink", 0.15);

    inventory.addItem(coffee);
    inventory.addItem(orangeJuice);
    inventory.addItem(discountedCoffee);

    // Display inventory analysis
    console.log("\n--- Inventory Analysis ---");

    // Filter: Expensive products
    const expensiveProducts = inventory.listItems().filter(product => product.getPrice() > 500);
    console.log('\nExpensive Products (>$500):');
    expensiveProducts.forEach(product => 
      console.log(`${product.getProductInfo()}: ${formatPrice(product.getPrice())}`));

    // Map: All product names
    const productNames = inventory.listItems().map(product => product.getProductInfo());
    console.log('\nAll Product Names:');
    console.log(productNames);

    // Create a customer with orders
    const customer: Customer = {
      name: "User Test",
      email: "Example@example.com",
      orders: [[coffee, orangeJuice], [discountedCoffee]]
    };

    console.log("\n--- Customer Information ---");
    console.log(getCustomerInfo(customer));

    // Apply the price multiplier (example usage)
    const doublePrice = createPriceMultiplier(2);
    console.log(`\nDouble price of coffee: ${formatPrice(doublePrice(coffee))}`);

  } catch (error) {
    console.error('Error running application:', error);
  }
}

// Run the application
main().catch(console.error);
