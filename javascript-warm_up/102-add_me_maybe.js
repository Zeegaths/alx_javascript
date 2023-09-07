// the function increments and calls a function
window.incrementAndCall = function (number, theFunction) {
    // Increment the number
    number++;

    // Call the provided function with the incremented number as an argument
    theFunction(number);
};