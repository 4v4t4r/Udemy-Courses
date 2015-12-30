#!/usr/bin/env node

'use strict';

// based on I07_StructuringOurApp/app.js
// $ npm install mysql --save

var express = require('express');

var app = express();
var mysql = require('mysql');

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

  var con = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test",
    database: "addressbook"
  });

  // get the array of objects from MySQL
  con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID', 
    function(err, rows) { 
      if (err) throw err;
      console.log(rows[0].Firstname);
    });

  next();
});

// passing the app by reference
htmlController(app);
apiController(app);

app.listen(port);
