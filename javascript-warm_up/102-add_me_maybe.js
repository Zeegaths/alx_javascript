// the function increments and calls a function
function addMeMaybe (number, theFunction){
    return number++; 
    addMeMaybe(theFunction);
}
module.exports = {addMeMaybe};