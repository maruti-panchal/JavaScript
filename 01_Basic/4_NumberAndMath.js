/*
# Number methods
==> Number()     :- It will convert in number type.
==> parseInt()   :- It is same as number.It will convert inrto strict integer. 
==> parseFloat() :- It is same as number.it will convert into decimal value.
==> isFinite()   :- It chach giver number is finite.
==> isInteger()  :- It check given number is Integer
==> toFixed(x)   :- After point how many digits you want to print that u have put in method.
==> toPrecision(x) :- It will gives roud value of the number
*/

// // #Number() 
/*
const a="10";
const b=10;
console.log(typeof a);             // string
console.log(typeof b);            // number
const c=a+b;
console.log(c);                 // 1010
console.log(typeof c);         // string
const d=Number(a);
console.log(d);              //10
console.log(typeof d);      //number 
const e=d+b;
console.log(e);           // 20
console.log(typeof e);   // number
*/

// # parseInt() 
/*
const a=20.20;
console.log(a);   // 20.2
console.log(typeof a);   //  number
b=parseInt(a);
console.log(b);   // 20
console.log(typeof b);  // number

# parseFloat() 
const a=20;
console.log(a); // 20
console.log(typeof a);  // number
const c=parseFloat(a);
console.log(c);  // 20 
console.log(typeof c);  // number  
*/

// # isInteger
/*
const a=100;
const b="Maruti";
console.log(Number.isInteger(a));  //  true
console.log(Number.isInteger(b));  // false
*/

// # toFixed()
/*
const a=5.56789;
console.log(a.toFixed(3));  // 5.568
*/

// # toPrecision()
/*
const a=5.56789;
console.log(a.toPrecision(3));   //5.57
*/

