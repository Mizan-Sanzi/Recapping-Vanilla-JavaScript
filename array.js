// array = list, collections 
// array is object type of data
// properties/keys of array can be called 'index'
// values of array is value

const numbers = [234, 345, 456, 567, 678];

console.log(typeof numbers); // output : object

const newNumber = [];

console.log(typeof newNumber); // output: object though it is an empty object

const friends = ['Babul', 'Sabul', 'Kabul', 'Hablu']; // values of array can be string, boolean etc 

console.log(friends.length); // length of array

// index of array

const players = ['Sakib', 'Rafiq', 'Mushfiq', 'Abul', 'New'];

players[0] = 'Mahmudullah'; // set value

console.log(players[0]); // get value
console.log(players[4]);

