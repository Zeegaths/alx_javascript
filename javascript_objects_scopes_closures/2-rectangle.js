#!/usr/bin/node
// This class defines a rectangle
const Rectangle = class {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w
            this.height = h
        }
    }

}

module.exports = Rectangle;

