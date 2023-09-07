// the function increments and calls a function
const myObject = {
    type: 'object',
    value: 12
  };  
  console.log(myObject);

  function incr() {
    myObject.value++;    
  }

  myObject.incr = function () {
    myObject.value++;
  };

  for (let i = 0; i < 3;i++){
    myObject.incr();
    console.log(myObject);
  }
   