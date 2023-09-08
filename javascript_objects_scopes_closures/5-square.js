#!/usr/bin/node
// constructor size with super method
class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of the Rectangle class using super()
      super(size, size);
    }
  }