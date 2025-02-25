$(document).ready(function() {
    const apiURL = "https://dummyjson.com/products";

    // Toggle Sidebar
    $("#menu-btn").click(function() {
        $("#sidebar").toggleClass("show-sidebar");
    });

    $("#close-sidebar").click(function() {
        $("#sidebar").removeClass("show-sidebar");
    });

    // Fetch and display products
    function fetchProducts() {
        $.ajax({
            url: apiURL,
            type: "GET",
            success: function(response) {
                console.log("API Response:", response);
                $("#product-list").empty();
                let categories = new Set();

                response.products.forEach(product => {
                    categories.add(product.category);
                    $("#product-list").append(`
                        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                            <img src="${product.thumbnail}" alt="${product.title}">
                            <h5>${product.title}</h5>
                            <p><strong>Price:</strong> $${product.price}</p>
                            <p><strong>Rating:</strong> ${product.rating}</p>
                        </div>
                    `);
                });

                // Populate categories in sidebar
                categories.forEach(category => {
                    $("#category-list").append(`<li data-category="${category}">${category}</li>`);
                });
            },
            error: function(error) {
                console.error("Error fetching products:", error);
            }
        });
    }

    fetchProducts();

    // Search Functionality
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $(".product-card").filter(function() {
            $(this).toggle($(this).find("h5").text().toLowerCase().includes(value));
        });
    });

    // Filter by Category
    $(document).on("click", "#category-list li", function() {
        let category = $(this).data("category");
        $(".product-card").each(function() {
            $(this).toggle(category === "all" || $(this).data("category") === category);
        });
    });

    // Show Product Details in Modal
    $(document).on("click", ".product-card", function() {
        let productId = $(this).data("id");
        $.get(apiURL + "/" + productId, function(product) {
            console.log(" Product Data Loaded:", product); // Log product details
            $("#product-title").text(product.title);
            $("#product-image").attr("src", product.thumbnail);
            $("#product-description").text(product.description);
            $("#product-price").text(product.price);
            $("#product-stock").text(product.stock);
            $("#product-rating").text(product.rating);

            $("#product-modal").fadeIn();
        });
    });

    // Close Modal
    $(".close").click(function() {
        $("#product-modal").fadeOut();
    });
});
