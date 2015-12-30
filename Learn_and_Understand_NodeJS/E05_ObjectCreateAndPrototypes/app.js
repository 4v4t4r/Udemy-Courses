var person = {
  firstname: 'abc',
  lastname: 'def',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

var john = Object.create(person);
console.log(john.firstname); // abc
john.firstname = 'John';
john.lastname = 'Galt';
console.log(john.firstname); // John

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
