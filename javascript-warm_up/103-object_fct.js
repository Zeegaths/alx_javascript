function addMeMaybe(number, theFunction) {
    const incrementedNumber = number + 1;
    const result = {
        value: incrementedNumber,
        incr: incr
    };
    theFunction(result);
}

function incr(number) {
    return number + 1;
}

module.exports = { addMeMaybe };
