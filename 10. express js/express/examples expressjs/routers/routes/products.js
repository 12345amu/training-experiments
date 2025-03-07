const express = require('express');
const router = express.Router();

// Route: Get all products
router.get('/', (req, res) => {
    res.send('List of all products');
});

// Route: Get a specific product by ID
router.get('/:id', (req, res) => {
    res.send(`Product with ID: ${req.params.id}`);
});

// Route: Create a new product (POST)
router.post('/', (req, res) => {
    res.send('New product created');
});

// Route: Update a product (PUT)
router.put('/:id', (req, res) => {
    res.send(`Product with ID: ${req.params.id} updated`);
});

// Route: Delete a product (DELETE)
router.delete('/:id', (req, res) => {
    res.send(`Product with ID: ${req.params.id} deleted`);
});

module.exports = router;
