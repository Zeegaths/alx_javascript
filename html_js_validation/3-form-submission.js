document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("submitForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var errorElement = document.getElementById("error");
    var successElement = document.getElementById("success");

    // Function to handle form submission
    function handleFormSubmit(event) {
        // Prevent default form submission
        event.preventDefault();

        // Retrieve form field values
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();

        // Validate form fields
        var isValid = true;

        if (name === "" || email === "") {
            displayErrorMessage("Please fill in all required fields.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayErrorMessage("Please enter a valid email address.");
            isValid = false;
        }

        // If all validations pass, display success message
        if (isValid) {
            displaySuccessMessage("Form submitted successfully!");
            form.reset(); // Clear form fields if needed
        }
    }

    // Function to display error message
    function displayErrorMessage(message) {
        errorElement.textContent = message;
        successElement.textContent = ""; // Clear the success message
    }

    // Function to display success message
    function displaySuccessMessage(message) {
        successElement.textContent = message;
        errorElement.textContent = ""; // Clear the error message
    }

    // Function to validate email using a regex pattern
    function isValidEmail(email) {
        var emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Add an event listener to the form to call handleFormSubmit on form submission
    form.addEventListener("submit", handleFormSubmit);
});
