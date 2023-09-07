// the function increments and calls a function
const myObject = {
    type: 'object',
    value: 12,
    incr: function() {
      this.value++;
    }
  };
  
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  
