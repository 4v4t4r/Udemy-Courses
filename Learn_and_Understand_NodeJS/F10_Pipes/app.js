#!/usr/bin/env node

'use strict';

// based on F09_Streams/app.js

var fs = require('fs');
var zlib = require('zlib');

// process chunk with 16KB
var readable = fs.createReadStream(__dirname + '/greet.txt');

// writable output stream for copying the file
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// readable and writeable stream
var gzip = zlib.createGzip();

// create /greetcopy.txt
readable.pipe(writable);

// create greet.txt.gz
readable.pipe(gzip).pipe(compressed);
