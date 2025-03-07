const express = require("express");
const app = express();
const port = 39;

// Middleware to parse JSON and form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST Route to Handle Form Submission
app.post("/submit-form", (req, res) => {
    const { name, email } = req.body;

    //  Print Data in Terminal (Console)
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);

    //  Send JSON Response to Postman
    res.json({
        message: "Form Submitted Successfully!",
        data: {
            name: name,
            email: email
        }
    });
});

// Start the Server
app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
});
