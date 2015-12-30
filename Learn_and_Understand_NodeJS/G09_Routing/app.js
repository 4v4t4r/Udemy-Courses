#!/usr/bin/env node

'use strict';

// based on G08_OutputtingJSON/app.js

var http = require('http');
var fs = require('fs');

// event listener with the callback
http.createServer(function(req, res) {

  if (req.url === '/') {
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  }

  else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
  }
 
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(1337, '0.0.0.0'); 
