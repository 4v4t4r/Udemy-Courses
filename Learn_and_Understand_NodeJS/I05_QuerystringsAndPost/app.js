#!/usr/bin/env node

'use strict';

// based on I04_TemplatesAndTemplateEngines/app.js

// http://x.x.x.x:3000/person/100
// http://x.x.x.x:3000

var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var port = process.env.PORT || 3000;

// https://github.com/expressjs/body-parser
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser
var jsonParser = bodyParser.json()

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

// filling the template
// http://x.x.x.x:3000/person/test?qstr=blabla
app.get('/person/:id', function(req, res) {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); 
});

// POST /person gets urlencoded body
app.post('/person', urlencodedParser, function(req, res) {
  res.send('Thank you!');
  console.log('post: ' + req.body.firstname);
  console.log('post: ' + req.body.lastname);
});

// POST /personjson gets JSON body
app.post('/personjson', jsonParser, function(req, res) {
  res.send('Thank you for the JSON data!');
  console.log('json: ' + req.body.firstname);
  console.log('json: ' + req.body.lastname);
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
