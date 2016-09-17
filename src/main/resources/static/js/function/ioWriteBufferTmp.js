var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log("bin[0]:" + bin[0]);
var str = bin.toString("utf-8");
console.log("Result: " + str);

var sub = bin.slice(2);
console.log("sub: " + sub);
sub[0]=0x69;
console.log('change slice: ' + bin);

var bin_1 = new Buffer('hello word','utf-8');
console.log('bin_1: ' + bin_1[0]);


var dup = new Buffer(bin_1.length);
bin_1.copy(dup);
dup[0]=0x71;
console.log("change bin_1: " + bin_1);
console.log("change dup: " + dup);