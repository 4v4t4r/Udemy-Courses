var name = 'John Galt';

var greet = 'Hello ' + name;

/* This don't work in every browser, but we could use https://babeljs.io
 * for translating the JavaScript to the older one */
var greet2 = `Hello ${name}`;

console.log(greet);
console.log(greet2);
