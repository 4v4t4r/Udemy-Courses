#!/usr/bin/env node

'use strict';

// based on I06_RESTandJSON/app.js

/* 
 * File Structure inspiration from:
 * http://expressjs.com/en/starter/generator.html
 * $ npm install express-generator -g
 * $ express myapp 
 */

var express = require('express');

var app = express();

var htmlController= require('./controllers/htmlController');
var apiController= require('./controllers/apiController');

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

// passing the app by reference
htmlController(app);
apiController(app);

app.listen(port);
