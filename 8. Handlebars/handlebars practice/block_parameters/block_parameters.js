$(document).ready(function () {
    // Sample data: List of users with favorite Indian dishes
    var userData = {
        users: [
            { name: "Amit", favoriteDish: "Paneer Butter Masala" },
            { name: "Priya", favoriteDish: "Biryani" },
            { name: "Rahul", favoriteDish: "Masala Dosa" },
            { name: "Sneha", favoriteDish: "Rajma Chawal" },
            { name: "Vikram", favoriteDish: "Chole Bhature" }
        ]
    };

    // Getting the Handlebars template
    var templateSource = $("#user-template").html();
    var template = Handlebars.compile(templateSource);

    // Generating the final HTML
    var compiledHtml = template(userData);

    // Injecting into the DOM
    $("#user-container").html(compiledHtml);
});
