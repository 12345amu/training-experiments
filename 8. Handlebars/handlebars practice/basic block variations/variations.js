$(document).ready(function () {
    // 1. Register a Handlebars helper named "ifStudent"
    Handlebars.registerHelper("ifStudent", function (options) {
        if (options.data.root.student) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    // 2. Select the template from the script tag
    var templateSource = $("#tea-stall-template").html();

    // 3. Compile the Handlebars template
    var template = Handlebars.compile(templateSource);

    // 4. Generate the final output
    var result = template({ student: true });

    // 5. Insert the output into the div
    $("#output").html(result);
});
