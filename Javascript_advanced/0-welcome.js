#!/usr/bin/node
// A welcome function
function welcome(firstName, LastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    let fullName = this.firstName + this.lastName

    function displayFullName() {
        alert("Welcome:" + " " + fullName);
    }
}
displayFullName();