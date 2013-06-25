#!/usr/bin/env node
// test primality of n, using known prime number in parray[]
var isprime = function(n, parray) {
    var i = 0;
    for (i = 0; i < parray.length; i++) 
        if ( (n % parray[i]) == 0 )
            return 0;
    console.log(n + " passed primality test\n");
    return 1;
}

var K = 100;
var i = 0;
var pa = new Array(1);
pa[0] = 2;
var lastprime = 2;
var out = "";

for (i=0 ; i<K; i++) {
    lastprime += 1 ;
    if ((isprime(lastprime, pa)==1) ) {
        pa.push(lastprime);
	console.log("found prime: " + lastprime);
    }
    else 
        i -= 1;
}

// print the first K prime numbers
for (var i = 0; i < K; i++) {
    var k = i+1;
    console.log(k +". " + pa[i]);
    out += pa[i]+","
};

var fs = require('fs');
var outfile = "primenumber.txt";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: prime numbers " + "To: " + outfile);


