const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});    

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data & JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic Routing
app.get("/", (req, res) => {
    res.render("index", { title: "Book Management Home" });
});

// Parse Query Params for searching books
app.get("/search", (req, res) => {
    const query = req.query.q || "No book searched";
    res.send(`You searched for: ${query}`);
});

// Using Routers for Book Routes
app.use("/books", bookRoutes);

// 404 Page
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// Start Server
app.listen(300, () => {
    console.log("Server running on http://localhost:300");
});
