// ****************************************************************************************
/*
# Synchronous & Asynchronous Programming
------------------------------------------
=> Synchronous Programming is nothing but all code get executed setp by step.line by line.
=> As shown in below example after for loop rest instruction get executed.
=> all instruction will wait untill for has complete it execution.
=> This is Synchronuns Programming.
=> This will restrict to execute other execution.
=> To resolve this problem we are using setTimeOut method.
 
setTimeout :- 
--------------
==> Wheneve compiler see settimeout method it push into Web ApIs provided by the Browser.
==> This will eliminate the restriction to keep in waiting.
==> setTimeout always return ID.

clearTimeout :- 
----------------
== It will clear the returnd id and setTimeout function will not execute.once we call this method.
*/

//************************************************************************************** */

// Synchronous Programming
// console.log("multiplication done");
// for (let i = 0; i < 5; i++) {
//   console.log("adition done");
// }
// console.log("subtraction done");
// console.log("division done");

/*
o/p :- 
---------
multiplication done
adition done
adition done
adition done
adition done
adition done
subtraction done
division done
*/

// Asynchronus Programming

console.log("first step");
console.log("Second Step");
setTimeout(() => {
  console.log("Inside asynch function");
}, 2000);
const id = setTimeout(() => {
  console.log("Inside Second asynch function");
}, 1000);
console.log("third step");
console.log("clearing second Asynch Function");
clearTimeout(id);
console.log("fourth Step");

/*

Output
--------

first step
Second Step
third step
clearing second Asynch Function
fourth Step
Inside asynch function

*/
