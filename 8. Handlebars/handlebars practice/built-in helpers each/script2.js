$(document).ready(function() {
    // 1. Get the Handlebars template
    var source = $("#data-template").html();

    // 2. Compile the template
    var template = Handlebars.compile(source);

    // 3. Define multiple datasets
    var context = {
        users: [
            {
                name: "Amit",
                age: 28,
                address: {
                    street: "MG Road",
                    city: "Bangalore",
                    pincode: "560001"
                }
            },
            {
                name: "Priya",
                age: 25,
                address: {
                    street: "Connaught Place",
                    city: "Delhi",
                    pincode: "110001"
                }
            }
        ],
        companies: [
            {
                name: "Infosys",
                location: "Bangalore",
                employees: ["Raj", "Sneha", "Vikram"]
            },
            {
                name: "TCS",
                location: "Mumbai",
                employees: ["Arun", "Neha", "Rohan"]
            }
        ]
    };

    // 4. Generate the final HTML
    var html = template(context);

    // 5. Insert into the page using jQuery
    $("#output").html(html);
});
