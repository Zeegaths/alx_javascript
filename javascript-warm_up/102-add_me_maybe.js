// the function increments and calls a function
function addMeMaybe(number, theFunction) {
    const incrementedNumber = number + 1;
    theFunction(incrementedNumber);
}
function incr(number) {
    return number + 1;
}

module.exports = { addMeMaybe };
