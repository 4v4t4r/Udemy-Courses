#!/usr/bin/env node

'use strict';

var http = require('http');

// event listener with the callback
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello world\n');
}).listen(1337, '0.0.0.0'); 
