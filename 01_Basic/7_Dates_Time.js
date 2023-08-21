/*  # Date 
==> To use date methods first we have to create date object using new keyword.
# Methods :- 
 1) toDateString()  :- gives the date in rtedable format.
 2) getDate()  :- Gives current day date.
 3) getFullYear()  :- Gives the Year.
 4) getMonth()  :-
 5) getDay()
 6) getHours()
 7) getMinutes()
 8) getSeconds()
 9) getMilliseconds()
10) setdate()
11) setFullYear()
12) setHours()
13) setMilliseconds()
14) setMinutes()
15) setMonth()
16) setSeconds()

*/

/* // This methods will provides current date
let myDate=new Date()
console.log(myDate);   //  2023-08-21T18:49:56.110Z
console.log(myDate.toDateString());  // Mon Aug 21 2023
console.log(myDate.getDate());  // 21
console.log(myDate.getFullYear());  // 2023
console.log(myDate.getMonth());   // 0-jan so that at this day it show 7-aug   // indexing start from 0-11
console.log(myDate.getDay());     // 0-Monday so that at this day it show 1-Tuesday   // indexing start from 0-11
*/

/* // This methods will provides past date
// ==> To find day of past date then u should pass the date in date method while creating object.
let myDate=new Date('january 5 2010')
console.log(myDate);   //  2023-08-21T18:49:56.110Z
console.log(myDate.toDateString());  
console.log(myDate.getDate());  
console.log(myDate.getFullYear()); 
console.log(myDate.getMonth());   
console.log(myDate.getDay());   
*/