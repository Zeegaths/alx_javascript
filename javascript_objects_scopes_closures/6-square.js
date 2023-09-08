#!/usr/bin/node
// Creates a square
class Square extends require('./5-square') {
    charPrint(c = 'X') {
        if (typeof c === undefined || c.length !== 1) {
            c = "X";
        }
        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;

