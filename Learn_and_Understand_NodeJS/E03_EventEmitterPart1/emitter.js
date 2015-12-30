function Emitter() {
  this.events = {};
}

// add the listener function to the events type array
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || []; // make sure it's array
  this.events[type].push(listener);            // array of listener functions
}

// loop through the functions with the specified event type and call it
Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
