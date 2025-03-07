const express = require('express');

const app = express();
const PORT = 31;

// Custom Middleware Function
const myLogger = (req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); // Pass control to the next middleware
};

// Apply middleware globally
app.use(myLogger);

// Define routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
