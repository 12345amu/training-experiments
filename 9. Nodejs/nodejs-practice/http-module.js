const http = require("http"); // Import HTTP module

// Create HTTP Server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set headers
    res.end("Hello, welcome to our Node.js server!"); // Send response
});

// Start Server
server.listen(300, () => {
    console.log(" Server is running on http://localhost:300");
});
