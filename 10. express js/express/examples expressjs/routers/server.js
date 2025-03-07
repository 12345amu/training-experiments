const express = require('express');

const app = express();
const PORT = 5000;

// Import product routes
const productRoutes = require('./routes/products');

// Use the product routes
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
