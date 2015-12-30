#!/usr/bin/env node

var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

greet3.greeting = 'Changed hello world!';
// same object as greet3, because caching -> same filename:
var greet3b = require('./greet3');
greet3b.greet(); 

// if we want the different objects with the same require
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5');
greet5.greet();
console.log(greet5.greeting); // undefined

