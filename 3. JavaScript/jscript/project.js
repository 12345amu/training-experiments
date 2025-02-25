// Sidebar Toggle
const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const sideNavBar = document.querySelector(".sidenav");

closeNav?.addEventListener('click', function() {
    sideNavBar.classList.toggle("mango");
});

// Dark and Light Theme Toggle
const darkTheme = function() {
    document.body.style.backgroundColor = "black";
    document.querySelector(".dark-theme").textContent = "Light Theme";
    document.querySelector("header").style.backgroundColor = "#2E282A";
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F";
};

const lightTheme = function() {
    document.body.style.backgroundColor = "white";
    document.querySelector(".dark-theme").textContent = "Dark Theme";
    document.querySelector("header").style.backgroundColor = "#F86624";
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC";
};


// Hover Effects
function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(element) {
    element.style.backgroundColor = "#DEE7E7";
}

// Company Name Change on Hover
const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company";
};

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white";
};

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red";
};
// Open and Close Register Modal
const openRegister = function() {
    document.getElementById("registerSection").style.display = "block";
    document.getElementById("loginSection").style.display = "none"; // Close login if open
};

const closeRegister = function() {
    document.getElementById("registerSection").style.display = "none";
};

document.getElementById("registerBtn")?.addEventListener("click", openRegister);
document.getElementById("closeRegisterBtn")?.addEventListener("click", closeRegister);

// Open and Close Login Modal
const openLogin = function() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("registerSection").style.display = "none"; // Close register if open
};

const closeLogin = function() {
    document.getElementById("loginSection").style.display = "none";
};

document.getElementById("loginBtn")?.addEventListener("click", openLogin);
document.getElementById("closeLoginBtn")?.addEventListener("click", closeLogin);

// Register Form Submission with 8-Character Password Validation
document.getElementById("registerSubmit")?.addEventListener("click", function() {
    const firstName = document.getElementById("firstName")?.value.trim();
    const lastName = document.getElementById("lastName")?.value.trim();
    const country = document.getElementById("country")?.value.trim();
    const phoneNumber = document.getElementById("phoneNumber")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("registerPassword")?.value.trim();

    if (!firstName || !lastName || !country || !phoneNumber || !email || !password) {
        alert("All fields are required.");
        return;
    }

    if (password.length !== 8) {  // Ensure exactly 8 characters
        alert("Password must be exactly 8 characters long.");
        return;
    }

    alert("Registration successful!");
    closeRegister();
});

// Login Form Submission with 8-Character Password Validation
document.getElementById("loginSubmit")?.addEventListener("click", function() {
    const passwordInput = document.querySelector("#loginPassword");

    if (passwordInput.value.length !== 8) {
        alert("Password must be exactly 8 characters long");
    } else {
        closeLogin();
    }
});

// Switch from Register to Login
document.getElementById("loginBtn")?.addEventListener("click", function() {
    closeRegister();
    openLogin();
});

// Switch from Login to Register (if needed)
document.getElementById("registerBtn")?.addEventListener("click", function() {
    closeLogin();
    openRegister();
});
