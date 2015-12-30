#!/usr/bin/env node

var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};

person.greet();

console.log(person['firstname']);
// alternatively:
// console.log(person.firstname);
