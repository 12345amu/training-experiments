const express = require("express");
const router = express.Router();

// Sample books data
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
];

// Advanced Routing (Get book details)
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (book) {
        res.render("book-details", { book });
    } else {
        res.status(404).send("Book Not Found");
    }
});

// Sending JSON Response for book list
router.get("/", (req, res) => {
    res.render("books", { books });
});

// Parsing Form Data (POST) to add a new book
router.post("/add", (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.redirect("/books");
});

module.exports = router;
