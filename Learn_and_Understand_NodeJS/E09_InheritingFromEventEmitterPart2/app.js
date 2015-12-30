// based on E06_InheritingFromEventEmitter/app.js

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  // add properties and methods also from the superclass
  EventEmitter.call(this);
  // and own ones
  this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

// we should do this *after* inherits, because the prototype is overwritten by
// inherits method
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

// create the object which inherits from EventEmitter
var greeter1 = new Greetr();

// add the event listener (keyword, function)
greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

// not found in object, but in prototype
greeter1.greet('Tony');
