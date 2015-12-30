// updated from E09_InheritingFromEventEmitterPart2/app.js

'use strict';

var Greetr = require('./greetr');

// create the object which extended from EventEmitter
var greeter1 = new Greetr();

// add the event listener (keyword, function)
greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

// not found in object, but in prototype
greeter1.greet('Tony');
