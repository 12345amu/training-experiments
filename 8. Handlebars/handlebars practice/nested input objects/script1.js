$(document).ready(function() {
    // 1. Get the Handlebars template
    var source = $("#user-template").html();

    // 2. Compile the template
    var template = Handlebars.compile(source);

    // 3. Define nested object data
    var context = {
        user: {
            name: "Rahul Sharma",
            email: "rahul@example.com",
            address: {
                city: "Mumbai",
                state: "Maharashtra"
            }
        }
    };

    // 4. Generate the final HTML
    var html = template(context);

    // 5. Insert into the page using jQuery
    $("#output").html(html);
});
