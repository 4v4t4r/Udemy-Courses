// function statement
function greet() {
  console.log('Hello World');
}
greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression, assigning anonymous function to variable
var greetMe = function() {
  console.log('Hi Again');
}
greetMe();

// it's still first-class function
logGreeting(greetMe);

// using a function expression on the fly
logGreeting(function() {
  console.log('Hello!');
});
