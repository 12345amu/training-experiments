// const EventEmitter = require('events');
// const emitter = new EventEmitter();


// //Register a Listener
// emitter.on('messageLogged', function(){
//     console.log('Listener called');
// });

// //Raise an event
// emitter.emit('messageLogged');

const EventEmitter = require("events"); // Import events module
const event = new EventEmitter(); // Create an event emitter

// Event Listener
event.on("orderReceived", function () {
    console.log("Order received! Preparing food...");
});

// Event Trigger
event.emit("orderReceived"); // Emits the event
