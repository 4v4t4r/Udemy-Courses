#!/usr/bin/env node

var firstname = 'Jane';

// immediately invoked function expression (IIFE)
(function() {
  var firstname = 'John';
  console.log(firstname);
}());

console.log(firstname); // 'Jane'

// IIFE with the function argument
(function(lastname) {
  var firstname = 'John';
  console.log(firstname + ' ' + lastname); // 'John Galt'
}('Galt'));
