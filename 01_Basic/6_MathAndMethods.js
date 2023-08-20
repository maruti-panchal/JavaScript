/* Math Methods
==> ceil(X):- It will gives the upper value og it's nearest Integer.
==> floor(x):- It will return the floor value.
==> round(x):- This method rounds a number to the nearest integer.
==> trunc(x):- This method returns the integer part of a number and discard the decimal values.
==> sqrt(x):-  It will return square Root of the provided number in method.
==> cbrt(x):-  This method returns the cubic root of a number.
==> pow(x,y):- The Math.pow() method returns the value of x to the power of y (xy).
==> random():- The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
==> abs(x):- The Math.abs() method returns the absolute value of a number.
==> PI :-  Math.PI returns PI (the ratio of a circle's area to the square of its radius, approximately 3.14)
==> max(x,y,z,...,n):- This method returns the highest value.
==> min(x,y,z,...,n):- This method return the lowest value.
*/

// # ceil(x)
/*
const a=Math.ceil(5.2);
console.log(a);  //  6
const b=Math.ceil(5.70);
console.log(b);  //  6
const c=Math.ceil(-5.70);
console.log(c);  // -5
*/

// # floor(x)
/*
const a=Math.floor(5.2);
console.log(a);  //  5
const b=Math.floor(5.70);
console.log(b);  //  5
const c=Math.floor(-5.70);
console.log(c);  // -6
const d=Math.floor(-6.70);
console.log(d);  // -7
*/

// # round(x)
/*
const a=6.20;
const b=6.90;
console.log(Math.round(a));   // 6
console.log(Math.round(b));   // 7
*/

// # trunc(x)
/*
const a= 2.49;
const b=2.98;
const c=-2.49;
const d=-2.94;
console.log(Math.trunc(a));   //  2
console.log(Math.trunc(b));   //  2
console.log(Math.trunc(c));   // -2
console.log(Math.trunc(d));   // -2
*/

// # max()
/*
const a=Math.max(1,2,3,4,5,6,7,8,9);
console.log(a);  // 9
const b=Math.max(-1,-2,-3,-4,-5,-6,-7,-8,-9);
console.log(b);  // -1
*/

// # min()
/*
const a=Math.min(1,2,3,4,5,6,7,8,9);
console.log(a);  // 1
const b=Math.min(-1,-2,-3,-4,-5,-6,-7,-8,-9);
console.log(b);   // -9
*/

// # sqrt()
/*
console.log(Math.sqrt(25));  // 5
console.log(Math.sqrt(9));  // 3
*/

// #cbrt()
/*
console.log(Math.cbrt(125));  // 5   //5*5*5  // 5^3
console.log(Math.cbrt(8));   // 2
*/

// # pow(x,y)
/*
console.log(Math.pow(2,3));   //  8
console.log(Math.pow(8,4));   // 4096
console.log(Math.pow(16,3));   //4096
*/

// # random()
/*
console.log(Math.random());     // 0.5836423144057297
console.log(Math.random());    // 0.05913645457709116
console.log(Math.random());   // 0.8904589981527231
console.log(Math.floor(Math.random()*10)+1);     // generate random number between 1 to 10
*/

// # abs()
/*
console.log(Math.abs(-45));  // 45
console.log(Math.abs(-10));  // 10
console.log(Math.abs(-100.89));  // 100.89
*/ 

// # PI 
/*
 console.log(Math.PI);   // 3.141592653589793
 */
