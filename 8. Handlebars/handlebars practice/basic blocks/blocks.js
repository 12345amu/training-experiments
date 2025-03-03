$(document).ready(function () {
    // 1. Register a Handlebars helper named "shout"
    Handlebars.registerHelper("shout", function (options) {
        return options.fn(this).toUpperCase();
    });

    // 2. Select the template from the script tag
    var templateSource = $("#loudspeaker-template").html();

    // 3. Compile the Handlebars template
    var template = Handlebars.compile(templateSource);

    // 4. Generate the final output
    var result = template({});

    // 5. Insert the output into the div
    $("#output").html(result);
});
