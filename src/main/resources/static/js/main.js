//just one instance
var counter_1 = require('./function/counter');
var counter_2 = require('./function/counter');

console.log("counter first: " + counter_1.count());
console.log("counter second:" + counter_2.count());
console.log("counter third: " + counter_1.count());

