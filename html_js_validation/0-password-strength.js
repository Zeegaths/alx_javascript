document.addEventListener("DOMContentLoaded", function () {
    var passwordForm = document.getElementById("passwordForm");
    var passwordInput = document.getElementById("password");
    var errorElement = document.getElementById("error");

    passwordForm.addEventListener("submit", function (event) {
        var password = passwordInput.value;

        // Call the validatePassword function to check password strength
        var isPasswordValid = validatePassword(password);

        if (!isPasswordValid) {
            errorElement.innerHTML = "Error! Password must meet all criteria: at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.";
            event.preventDefault(); // Prevent form submission
        } else {
            errorElement.innerHTML = ''; // Clear the error message if the password is valid
        }
    });

    // Function to validate password strength
    function validatePassword(password) {
        // Password criteria regex patterns
        var lengthPattern = /.{8,}/;
        var uppercasePattern = /[A-Z]/;
        var lowercasePattern = /[a-z]/;
        var digitPattern = /\d/;
        var specialCharPattern = /[!@#$%^&*]/;

        // Check each password criteria individually
        var isLengthValid = lengthPattern.test(password);
        var isUppercaseValid = uppercasePattern.test(password);
        var isLowercaseValid = lowercasePattern.test(password);
        var isDigitValid = digitPattern.test(password);
        var isSpecialCharValid = specialCharPattern.test(password);

        // Combine the results
        return isLengthValid && isUppercaseValid && isLowercaseValid && isDigitValid && isSpecialCharValid;
    }
});
