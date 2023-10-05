document.addEventListener("DOMContentLoaded", function () {
    var dynamicForm = document.getElementById("dynamicForm");
    var numFieldsSelect = document.getElementById("numFields");
    var inputContainer = document.getElementById("inputContainer");
    var errorElement = document.getElementById("error");

    numFieldsSelect.addEventListener("change", function () {
        var selectedValue = numFieldsSelect.value;
        generateInputFields(selectedValue);
    });

    dynamicForm.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission
            errorElement.textContent = "Please fill in all required fields."; // Display error message
        } else {
            errorElement.textContent = ""; // Clear the error message if the form is valid


        }
    });

    function generateInputFields(numFields) {
        inputContainer.innerHTML = ""; // Clear previous fields

        for (var i = 1; i <= numFields; i++) {
            var inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + i;
            inputField.placeholder = "Field " + i;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm() {
        var inputFields = document.querySelectorAll("#inputContainer input");

        for (var i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === "") {
                return false; // At least one field is empty
            }
        }

        return true; // All fields are filled
    }
});
