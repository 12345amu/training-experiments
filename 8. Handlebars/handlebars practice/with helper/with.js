$(document).ready(function () {
    // 1. Select the Handlebars template from the script tag
    var templateSource = $("#wedding-template").html();

    // 2. Compile the Handlebars template
    var template = Handlebars.compile(templateSource);

    // 3. Data containing wedding details
    var weddingData = {
        groom: {
            name: "Ramesh",
            age: 30,
            city: "Mumbai"
        }
    };

    // 4. Generate the final output
    var result = template(weddingData);

    // 5. Insert the output into the div
    $("#output").html(result);
});
