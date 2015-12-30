#!/usr/bin/env node

'use strict';

var buffer = new ArrayBuffer(8);   // v8 feature, 8B = 64b
var view = new Int32Array(buffer); // in 64b, we have only 2 x 32b

view[0] = 5;
view[1] = 15;
view[2] = 30; // it doesn't do anything, we have only 2 ints

console.log(view);
