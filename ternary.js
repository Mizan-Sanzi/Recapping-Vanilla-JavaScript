// ternary = --> three parts

//normal if-else

const age = 12;
if (age>18){
    console.log('you can vote');
}
else{
    console.log('Wait for some years to reach the expected age'); // this is the output in context of the age 12
}


//simple ternary

var Age =20;

Age>=18 ? console.log('you can give vote') : console.log('wait for the expected age'); //output is the first console


let price = 500;
const isLeader = false;
if (isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}
//console.log(price);
price = isLeader === true ? 0 : price + 100;
console.log(price);

// Optional : semi-advanced ternary

if (isLeader === true){
    if (price> 1000){
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else{
    console.log('Pay full amount');
}
