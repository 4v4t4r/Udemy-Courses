/* 
  Revealing module pattern, exposing only 
  the properties and methods you want via 
  an returned object 
*/

var greeting = 'Hello world!!!!';

greet = function() {
  console.log(greeting);
};

module.exports = {
  greet: greet
}
