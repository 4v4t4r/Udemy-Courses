#!/usr/bin/env node

// based on D05_PrototypalInheritance/app.js

'use strict';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

var john = new Person('John', 'Galt');
console.log(john.firstname);

// All JavaScript objects inherit the properties and methods from their
// prototype (that's also the object, which could have it's own prototype)
john.greet();

var jane = new Person('Jane', 'Galt');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
