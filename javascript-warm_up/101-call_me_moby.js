// excecutes x times a fnction
function callMeMoby(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Call the callMeMoby function with the specified arguments
callMeMoby(3, function () {
    console.log('C is fun');
});