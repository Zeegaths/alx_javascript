// the function increments and calls a function
function addMeMaybe(number, theFunction) {
    const incrementedNumber = number + 1;
    const result = {
        value: incrementedNumber,
        incr: incr
    };
    console.log(result);
    theFunction(result);
}

function incr(number) {
    return number.value + 1;
}

module.exports = { addMeMaybe, incr };

