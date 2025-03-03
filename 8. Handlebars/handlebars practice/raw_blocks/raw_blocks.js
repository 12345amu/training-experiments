$(document).ready(function () {
    // Sample data (not used in raw blocks)
    var sampleData = {
        name: "Amit",
        dish: "Paneer Butter Masala"
    };

    // Getting the Handlebars template
    var templateSource = $("#raw-template").html();
    var template = Handlebars.compile(templateSource);

    // Generating the final HTML
    var compiledHtml = template(sampleData);

    // Injecting into the DOM
    $("#raw-container").html(compiledHtml);
});
