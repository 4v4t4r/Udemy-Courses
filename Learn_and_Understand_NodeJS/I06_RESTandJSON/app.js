#!/usr/bin/env node

'use strict';

// based on I05_QuerystringsAndPost/app.js

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

/* General idea for restful API: */
app.get('/api/person/:id', function(req, res) {
  // get that data from database
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, function(req, res) {
  // save to the database
});

app.delete('/api/person/:id', function(req, res) {
  // delete from the database
});

app.listen(port);
