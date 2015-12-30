var obj = {
  name: 'John Galt',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

/* Normal calling */
obj.greet();

/* With .call, we can overwrite `this`, further parameters are provided as the
 * comma separated list */
obj.greet.call({ name: 'Jane Doe' });

/* The same output, further parameters are provided as the array */
obj.greet.apply({ name: 'Jane Doe' });
