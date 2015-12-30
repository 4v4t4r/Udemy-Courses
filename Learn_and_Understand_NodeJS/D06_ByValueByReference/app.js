#!/usr/bin/env node

// passing by value (used for primitive data types)
function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a); // output 1

// passing by reference (used for objects)
function changeObj(d) {
  d.prop1 = function() {}
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log(c); // output { prop1: {} }
changeObj(c);
console.log(c); // output { prop1: [Function], prop2: {} }
