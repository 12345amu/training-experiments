const EventEmitter = require("events"); // Import events module

// Extend EventEmitter Class
class OrderSystem extends EventEmitter {
    placeOrder(orderId, customerName) {
        console.log(` Order ${orderId} placed by ${customerName}.`);
        this.emit("orderReceived", orderId, customerName); // Emit event
    }
}

// Create an instance of OrderSystem
const order = new OrderSystem(); 

// Listen for 'orderReceived' event
order.on("orderReceived", (orderId, customerName) => {
    console.log(` Order ${orderId} received from ${customerName}. Preparing food...`);
});

// Place orders
order.placeOrder(101, "Rahul");
order.placeOrder(102, "Priya");
