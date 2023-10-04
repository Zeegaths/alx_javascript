document.addEventListener("DOMContentLoaded", function () {
    var emailForm = document.getElementById("emailForm");
    var emailInput = document.getElementById("email");
    var errorElement = document.getElementById("error");

    // Function to validate email format
    function validateEmail(email) {
        var emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);
    }

    emailForm.addEventListener("submit", function (event) {
        var email = emailInput.value;

        if (!validateEmail(email)) {
            errorElement.innerHTML = "Please enter a valid email address.";
            event.preventDefault(); // Prevent form submission
        } else {
            errorElement.innerHTML = ''; // Clear the error message if the email is valid
        }
    });
});
