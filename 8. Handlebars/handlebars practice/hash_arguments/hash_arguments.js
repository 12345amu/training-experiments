// Registering the Handlebars helper "fruitList"
Handlebars.registerHelper("fruitList", function (context, options) {
    // Extract hash arguments (id, class, etc.)
    var attrs = Object.keys(options.hash)
        .map(function (key) {
            return key + '="' + options.hash[key] + '"';
        })
        .join(" ");

    // Creating the <ul> element with hash attributes
    var result = "<ul " + attrs + ">";

    // Looping through items to generate <li>
    result += context
        .map(function (item) {
            return "<li>" + options.fn(item) + "</li>";
        })
        .join("\n");

    result += "</ul>"; // Closing the <ul> tag
    return result;
});

$(document).ready(function () {
    // Sample data: List of fruits
    var fruitData = {
        fruits: [
            { fruitName: "Mango " },
            { fruitName: "Banana " },
            { fruitName: "Apple " },
            { fruitName: "Grapes " }
        ]
    };

    // Getting the Handlebars template
    var templateSource = $("#fruit-template").html();
    var template = Handlebars.compile(templateSource);

    // Generating the final HTML
    var compiledHtml = template(fruitData);

    // Injecting into the DOM
    $("#fruit-container").html(compiledHtml);
});
