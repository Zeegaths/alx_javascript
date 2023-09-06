
// excecutes x times a fnction
function theFunction(x) {
    for (let i = 0; i < x; i++)
    theFunction();
}
function callMeMoby (x, theFunction) {
    return x * theFunction()
}