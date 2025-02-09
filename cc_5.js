//Task 1: Object Properties

//Declaring an object customer with the properties:
let customer = { name: "John Doe", age: 35, email: "john.doe@email.com" };
//Logging each obect into the console.
console.log(`Cusomter's Name: ${customer.name}`);
console.log(`Customer's Age: ${customer.age}`);
console.log(`Customer's Email: ${customer.email}`);

//Task 2: Object Methods

//Declaring an object order with the properties:
let order = { orderId: 12345, totalAmount: 150, status: "Processing",
//Displaying order deatils using a  displayOrder function
displayOrder() {
    console.log(`Order ID: ${this.orderId}`);
    console.log(`Order Total Amount: ${this.totalAmount}`);
    console.log(`Order Status: ${this.status}`);
}
};
order.displayOrder();

//Task 3: Array Manipulation (Push, Pop, Shift, Unshift)

//Declaring an array cartItems with three product names
let cartItems = ["Cart: Ergo Desk", "Ergo Chair", "Ergo Keyboard"];
//Adding a new product to the cart using push method
cartItems.push("49in Ultra Wide Curved Monitor");
//Removing the last item using the pop method
cartItems.pop();
//Adding a new item to the beginning using the unshift method
cartItems.unshift(" Ergo Mouse");
//Removing the first item using the shift method
cartItems.shift();
//Logged the final array to the console
console.log(cartItems);

//Task 4: Map Method

//Declaring an array of prices
let prices = [100, 200, 300];
//Using the map method to add a 10% discount to each price and logging the discounted prices to the console
console.log(prices.map((price) => price - (price * .1)));

// Task 5: Filter Method 

//Declaring an array displaying five product quantities
let inventory = [15, 20, 25, 0, 350];
//Using the filter method to remove products with zero stock and logging the filtered array to the console
console.log(inventory.filter((stock) => stock > 0));
 
//Task 6: Reduce Method

//Declare an array sales = [500, 300, 200, 400]
let sales = [500, 300, 200, 400];
//Using the reduce method to calculate the total sales and logging the total revenue to the console
console.log(sales.reduce((totalRevenue, sale) => totalRevenue + sale));

// Task 7: find() Method

//Declaring an array of Customers
let customers = ["Alice", "Bob", "Charlie", "David"];
//Using the find method to find the customer named Charlie
let findCustomer = customers.find(customer => customer === "Charlie");
//Logging the customer to the console
console.log(findCustomer);

// Task 8:// Function Declaration

//Write a function calculateTax(amount, taxRate) that calculates the sales tax
    function calculateTax(amount, taxRate)
    //Return the calculated tax and log it using a template literal
    {return amount * taxRate};
//Logging the tax amount to the console
console.log(`Tax: $${calculateTax(500, .17)}`);