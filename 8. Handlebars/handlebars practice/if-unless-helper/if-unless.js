$(document).ready(function () {
    // 1. Select the Handlebars template from the script tag
    var templateSource = $("#guest-template").html();

    // 2. Compile the Handlebars template
    var template = Handlebars.compile(templateSource);

    // 3. Data containing a list of wedding guests with VIP status
    var weddingData = {
        guests: [
            { name: "Amit", relation: "Cousin", isFamily: true },
            { name: "Priya", relation: "Sister", isFamily: true },
            { name: "Uncle Sharma", relation: "Uncle", isFamily: true },
            { name: "Rohit", relation: "Friend", isFamily: false }
        ]
    };

    // 4. Generate the final output
    var result = template(weddingData);

    // 5. Insert the output into the div
    $("#output").html(result);
});
