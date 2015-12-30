#!/usr/bin/env node

'use strict';

var fs = require('fs');

// process chunk with 16KB
var readable = fs.createReadStream(__dirname + '/greet.txt',
 { encoding: 'utf8', highWaterMark: 16 * 1024 });

// writable output stream for copying the file
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// add event listener for retrieving the data
readable.on('data', function(chunk) {
  console.log(chunk.length);
  writable.write(chunk);
});
