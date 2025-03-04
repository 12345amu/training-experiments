const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Serve index.html as default
    }

    const extname = path.extname(filePath);


    // Define content type based on file extension
    const contentType = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
    }[extname] || "text/plain";

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

// Start Server
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
