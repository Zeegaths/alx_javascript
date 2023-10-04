document.addEventListener("DOMContentLoaded", function () {
    var dynamicForm = document.getElementById("dynamicForm");
    var numFieldsSelect = document.getElementById("numFields");
    var inputContainer = document.getElementById("inputContainer");

    numFieldsSelect.addEventListener("change", function () {
        var selectedValue = numFieldsSelect.value;
        generateInputFields(selectedValue);
    });

    dynamicForm.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission
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
