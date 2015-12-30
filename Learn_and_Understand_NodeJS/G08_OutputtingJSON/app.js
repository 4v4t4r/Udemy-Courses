#!/usr/bin/env node

'use strict';

// based on G06_OutputtingHTMLAndTemplates/app.js

var http = require('http');
var fs = require('fs');

// event listener with the callback
http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'application/json' });

  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };
  res.end(JSON.stringify(obj));

}).listen(1337, '0.0.0.0'); 
