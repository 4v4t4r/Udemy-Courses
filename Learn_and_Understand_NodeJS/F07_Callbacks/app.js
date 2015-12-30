#!/usr/bin/env node

'use strict';

function greet(callback) {
  console.log('Hello!');

  var data = {
    name: 'John Galt'
  };

  callback(data);
};

greet(function(data) {
  console.log('The callback was invoked!');
  console.log(data);
});

greet(function(data) {
  console.log('A different callback was invoked!');
  console.log(data.name);
});
