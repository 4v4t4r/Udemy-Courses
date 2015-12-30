#!/usr/bin/env node

function Person(firstname, lastname) {

  this.firstname = firstname;
  this.lastname = lastname;

}

// A function may be either called normally or be called as a constructor (i.e.
// by prefixing the function call with the new keyword).
var john = new Person('John', 'Galt');
console.log(john.firstname);

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

// All JavaScript objects inherit the properties and methods from their
// prototype (that's also the object, which could have it's own prototype)
john.greet();

var jane = new Person('Jane', 'Galt');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
