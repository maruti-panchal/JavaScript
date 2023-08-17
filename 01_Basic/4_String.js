/* # String :- 
=> More than one character called String.
=> String are used for sorting and manipulating data.
=> We can use 'Single' quote Or "Double" quote.
=> We can also Create a string using String() Constructor.
=> If we create a String using String() constructor the result will get in array format.
*/

// # Single and Double Quote
let fName="Maruti";
let lName='Panchal';
console.log(fName);  // Maruti
console.log(lName); //  Panchal
let fullName=new String("Maruti Panchal");  // but this not recomonded to create a String.
console.log(fullName);

// # Escape Character
// let sentence="This is Maruti Panchal. And I "welcome" to you in this repo";//give error
let sentence1="This is Maruti Panchal. And I \"welcome\" to you in this repo"; // Method 1
console.log(sentence1);
let sentence2="This is Maruti Panchal. And I \'welcome\' to you in this repo";  // Method 2
console.log(sentence2);
let sentence3="This is Maruti Panchal. And I \\welcome\\ to you in this repo"; // Method 3
console.log(sentence3);
let sentence4="This is Maruti Panchal. And I 'welcome' to you in this repo";  // Method 4
console.log(sentence4);
let sentence5='This is Maruti Panchal. And I "welcome" to you in this repo';  // Method 5
console.log(sentence5);

