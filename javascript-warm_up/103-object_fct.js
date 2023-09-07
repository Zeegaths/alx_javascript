// the function increments and calls a function
function addMeMaybe(number, theFunction) {
    const incrementedNumber = number + 1;
    theFunction(incrementedNumber);
}
function incr(number) {
    return number + 1
};
console.log(number);
module.exports = { addMeMaybe, incr };
