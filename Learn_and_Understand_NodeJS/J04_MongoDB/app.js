#!/usr/bin/env node

'use strict';

// based on J02_NodeAndMySQL/app.js
// $ sudo aptitude install libkrb5-dev
// $ npm install mongoose --save

var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://user:pass@server:port/addressbook');

/* create the schema */
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
});

/* create constructor for objects from schema */
var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user to the database
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user to the database
jane.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

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

  // get all the users from database
  Person.find({}, function(err, users) {
    if (err) throw err;

    // print the object of all the users
    console.log(users);
  });

  next();
});

// passing the app by reference
htmlController(app);
apiController(app);

app.listen(port);
