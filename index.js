console.log('Hello'); //output: Hello
var name = 'JavaScript';
var number = 13;
console.log('Hello2', name, number); //output: Hello2 JavaScript 13

//alert('Hello3'); //ReferenceError 

var orangePrice = 200;
var applePrice = 400;

console.log(orangePrice+ applePrice);

//number in javaScript

var chairPrice = 1200;
var tablePrice = '1400';

console.log(chairPrice + parseInt(tablePrice));

var first = 0.1;
var second = 0.2;
var total = first + second;

console.log(total.toFixed(3));

console.log(typeof total); //output: number

var divide = 50/0;
console.log(divide); //output: infinity

var divide2 = -50/0;
console.log(divide2); //output : -infinity (negative infinity)

//mathematical operators

var age = 35;
age += 10; // shorthand output: 35
age -= 10; // output: 25

console.log(age);

//concatenate

console.log('40'+2); //output: 402 (string)
console.log('40'-2); //output: 38 (number)
