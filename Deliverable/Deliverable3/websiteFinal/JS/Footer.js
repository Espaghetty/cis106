// JS/Footer.js

function validateForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form elements
    var emailInput = document.getElementById("Ename");
    var passwordInput = document.getElementById("Pass");

    // Get the error message elements
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var passwordRequirement1 = document.getElementById("require1"); // New line
    var passwordRequirement2 = document.getElementById("require2"); // New line

    // Reset previous error messages and change color back to default
    emailError.textContent = "";
    passwordError.textContent = "";
    passwordRequirement1.style.color = ""; // Change color back to default
    passwordRequirement2.style.color = ""; // Change color back to default

    // Validate email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email address is required.";
    }

    // Validate password
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
    } if(passwordInput.value.length < 4) {
        passwordRequirement1.style.color = "lightcoral"; // Change color to light red
    } if (!hasSpecialCharacter(passwordInput.value)) {
        //changes error message color to light red
        passwordRequirement2.style.color = "lightcoral";
    }
    
    
}
function hasSpecialCharacter(str) {
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacters.test(str);
}