// comparison

// bigger : >
// less : <
// equal : == or ===
// greater than or equal: >= // not => because it means arrow functions in javaScript
// less than or equal: <=
// not equal: !=

// and : &&
// or : ||

console.log(5>10); //output: false
console.log(10==10); // output: true
console.log(15>10); //output: true
console.log(10>=10); //output: true
console.log(15>=10); //output: true

var peperDam = 60;
var peyararDam = 40;

console.log(peperDam>peyararDam); //output: true

console.log(10=='10'); //output: true
console.log(10==='10'); //output: false

console.log(10 != '10'); //output: false
console.log(10 !== '10') //output: true

var biryaniPrice =250;

if (biryaniPrice<300){
    console.log('Mama, give me a plate of biryani'); // result will be printed
}

if (biryaniPrice>500){
    console.log('Mama, give me a burger'); // result will not be printed
}

// here is the solution of why the second 'if' console's result did not printed

if (biryaniPrice>500){
    console.log('Mama, give me a plate of biryani') //result will not be printed...else
}
else{
    console.log('Mama, give me a hotdog');
}

//multiple conditions

/* const salary = 25000;
const isBCS = true;

if (salary>20000){
    console.log('su---patro');
}
else {
    console.log('onno patro khujo');
} */

const salary = 25000;
const isBCS = true;
const height = 61;

if (salary>20000 && height>65){
    console.log('su---patro');
}
else {
    console.log('onno patro khujo'); //will be printed this output
}

const Salary = 25000;
const IsBCS = true;

if (salary>30000 || IsBCS){
    console.log('su---patro'); //will be printed this output
}
else {
    console.log('onno patro khujo');
}

//multi-level if-else condition

const price = 5000;

if (price >= 5000){
    const discount = price*10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 2500){
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log('Pay:', price);
}

// nested if-else

const money = 0;

if (money> 300){
    console.log('Bro, you are rich');
}
else {
    if(money > 100){
        console.log('Good luck! Your are from middle class');
    }
    else{
        if(money>0){
            console.log('Bad Luck, Kola khaw!');
        }
        else{
            console.log('Poverty is a silent enemy');
        }
    }
}
