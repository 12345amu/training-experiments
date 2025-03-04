const EventEmitter = require("events"); // Import events module
const event = new EventEmitter(); // Create an event emitter

// Event Listener with Arguments
event.on("orderPlaced", function (orderId, customerName) {
    console.log(` Order ${orderId} received from ${customerName}. Preparing food...`);
});

// Emit Event with Arguments
event.emit("orderPlaced", 101, "Rahul");
event.emit("orderPlaced", 102, "Priya");
