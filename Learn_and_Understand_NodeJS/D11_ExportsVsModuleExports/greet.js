/* 
 * We are overwritting the object, now they point 
 * to the different places 
 */
exports = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);
