// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Food menu data
const foodMenu = [
    { id: 1, name: 'Paneer Butter Masala', price: 250 },
    { id: 2, name: 'Chole Bhature', price: 120 },
    { id: 3, name: 'Masala Dosa', price: 150 }
];

// API Route to fetch the menu
app.get('/menu', (req, res) => {
    res.json(foodMenu);
});

// API Route to place an order
app.post('/order', (req, res) => {
    const { foodId } = req.body;
    const foodItem = foodMenu.find(item => item.id === foodId);

    if (!foodItem) {
        return res.status(404).json({ message: 'Food item not found!' });
    }

    res.json({ message: `Your order for ${foodItem.name} has been placed!` });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000...');
});
