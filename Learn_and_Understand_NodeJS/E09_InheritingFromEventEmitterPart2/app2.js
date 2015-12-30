var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Galt';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
  /* attach properties and methods from Person class */
  Person.call(this);

  this.badgenumber = '1337';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
