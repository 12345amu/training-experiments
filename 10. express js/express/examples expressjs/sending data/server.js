const express = require('express');
const path = require('path');

const app = express();
const PORT = 1000;

// Sending Plain Text
app.get('/text', (req, res) => {
    res.send('This is a plain text response.');
});

// Sending HTML
app.get('/html', (req, res) => {
    res.send('<h1>Welcome to My Express App</h1><p>This is an HTML response.</p>');
});

// Sending JSON
app.get('/json', (req, res) => {
    res.json({ message: 'This is a JSON response', success: true });
});

// Sending a File
app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'sample.txt'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running....`);
});
