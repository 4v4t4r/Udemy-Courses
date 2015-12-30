#!/usr/bin/env node

'use strict';

// based on I02_Routing/app.js

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// middleware mapping for the static content
app.use('/assets', express.static(__dirname + '/public'));

// own middleware, a route will match any path that follows its path
// immediately with a "/"
app.use('/', function(req, res, next) {
  console.log('Request URL: ' + req.url);
  next();
});

// routes
app.get('/', function(req, res) {
  res.send('<html><head><link href="assets/style.css" type="text/css" ' +
   'rel="stylesheet"/></head><body><h1>Hello world!</h1></body></html>');
});

// route with dynamic content
app.get('/person/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Person: ' +
   req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
