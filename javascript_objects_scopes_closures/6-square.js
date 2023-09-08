#!/usr/bin/node
// Creates a square
class Square extends require('./5-square') {
      charPrint(c) {
      if (typeof c === undefined) {
        c = "X";      
      }
      for (let i = 0; i < this.height; i++){
        console.log(c.repeat(this.width));
      }
    }
  }
  
  module.exports = Square;
  
  