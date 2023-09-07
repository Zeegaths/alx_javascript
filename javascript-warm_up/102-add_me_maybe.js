// the function increments and calls a function
function addMeMaybe(number, theFunction) {
    const incrementedNumber = number + 1;
    theFunction(incrementedNumber);
}

module.exports = { addMeMaybe };
