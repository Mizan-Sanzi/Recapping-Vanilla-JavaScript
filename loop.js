// recap: variable
const amount = 200;

// recap: conditional
if (amount>500){
    console.log('I will buy a book');
}
else {
    console.log('Takai nai, boi kinba ki dia?'); //this console will be printed
}

// recap: array 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers); 

// loop: for loop
for (const num of numbers){
    console.log(num);
}

const fruits = ['Apple', 'Banana', 'Date', 'Mango', 'Papaya', 'Others'];

for(const fruit of fruits){
    console.log('I want to eat:', fruit);
}

//while loop 
const number = 7;
if (number<10){
    console.log('Got a small number');
}

let num = 0;
while (num<5){
    num = num + 1;
    console.log('Looping:', num);

}