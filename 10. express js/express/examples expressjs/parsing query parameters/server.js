const express = require('express');

const app = express();
const PORT = 35;

// Route to handle query parameters
app.get('/user', (req, res) => {
    const { name, age } = req.query;

    if (!name || !age) {
        return res.send("Please provide both 'name' and 'age' parameters.");
    }

    res.send(`User Name: ${name}, Age: ${age}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  //http://localhost:35/user?name=Raj&age=25
});
