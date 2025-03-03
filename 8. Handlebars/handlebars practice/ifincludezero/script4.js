$(document).ready(function() {
    // Custom helper to include zero
    Handlebars.registerHelper("ifIncludeZero", function(value, options) {
        return (value === 0 || value) ? options.fn(this) : options.inverse(this);
    });

    // Get the template
    var source = $("#template").html();
    var template = Handlebars.compile(source);

    // Data with ₹0 balance
    var context = {
        user: { name: "Amit", balance: 0 }
    };

    // Render the template
    var html = template(context);
    $("#output").html(html);
});
