$(document).ready(function () {
    // 1. Select the Handlebars template from the script tag
    var templateSource = $("#guest-template").html();

    // 2. Compile the Handlebars template
    var template = Handlebars.compile(templateSource);

    // 3. Data containing a list of wedding guests
    var weddingData = {
        guests: [
            { name: "Amit", relation: "Cousin" },
            { name: "Priya", relation: "Sister" },
            { name: "Uncle Sharma", relation: "Uncle" },
            { name: "Rohit", relation: "Friend" }
        ]
    };

    // 4. Generate the final output
    var result = template(weddingData);

    // 5. Insert the output into the div
    $("#output").html(result);
});
