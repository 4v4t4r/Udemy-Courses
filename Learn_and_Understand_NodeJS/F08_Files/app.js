#!/usr/bin/env node

'use strict';

var fs = require('fs');

// synchronous (blocking) read
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// asynchronous (nonblocking) read, we are providing error-first callback
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
 function(err, data) {
   console.log(data);
});

// this is invoked before the second readfile
console.log('Done!');
