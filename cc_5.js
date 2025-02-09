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