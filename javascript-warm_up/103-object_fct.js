// the function increments and calls a function
const myObject = {
    type: 'object',
    value: 12
  };  
  
  function incr() {
    myObject.value++;    
  }
   console.log(myObject);

   incr(myObject);
   
   console.log(myObject);