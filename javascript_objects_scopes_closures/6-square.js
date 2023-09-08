#!/usr/bin/node
// Creates a square
class Square extends require('./5-square') {
    constructor(size) {
      super(size);
    }
  
    charPrint(c = 'X') {
      if (typeof c !== 'string' || c.length !== 1) {
        throw new Error('The argument c must be a single character string.');
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
  
  module.exports = Square;
  