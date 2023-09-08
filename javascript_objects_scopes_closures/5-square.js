#!/usr/bin/node
// constructor size with super method
const Square1 = require ('./4-rectangle');
class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of the Rectangle class using super()
      super(size, size);
    }
  }

  module.exports = Square;