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

//Declaing an array cartItems with three product names
let cartItems = ["Ergo Desk", "Ergo Chair", "Ergo Keyboard"];
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