#!/usr/bin/env node

'use strict';

// based on I03_StaticAndMiddleware/app.js

// http://x.x.x.x:3000/person/100
// http://x.x.x.x:3000

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// middleware mapping for the static content
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// own middleware, a route will match any path that follows its path
// immediately with a "/"
app.use('/', function(req, res, next) {
  console.log('Request URL: ' + req.url);
  next();
});

// routes
app.get('/', function(req, res) {
  // look for views/index.(view engine) => views/index.ejs
  res.render('index'); 
});

// route with dynamic content
app.get('/person/:id', function(req, res) {
  res.render('person', { ID: req.params.id }); 
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
