// /* # String :- 
// => More than one character called String.
// => String are used for sorting and manipulating data.
// => We can use 'Single' quote Or "Double" quote.
// => We can also Create a string using String() Constructor.
// => If we create a String using String() constructor the result will get in array format.
// */

// // # Single and Double Quote
// let fName="Maruti";
// let lName='Panchal';
// console.log(fName);  // Maruti
// console.log(lName); //  Panchal
// let fullName=new String("Maruti Panchal");  // but this not recomonded to create a String.
// console.log(fullName);

// // # Escape Character
// // let sentence="This is Maruti Panchal. And I "welcome" to you in this repo";//give error
// let sentence1="This is Maruti Panchal. And I \"welcome\" to you in this repo"; // Method 1
// console.log(sentence1);
// let sentence2="This is Maruti Panchal. And I \'welcome\' to you in this repo";  // Method 2
// console.log(sentence2);
// let sentence3="This is Maruti Panchal. And I \\welcome\\ to you in this repo"; // Method 3
// console.log(sentence3);
// let sentence4="This is Maruti Panchal. And I 'welcome' to you in this repo";  // Method 4
// console.log(sentence4);
// let sentence5='This is Maruti Panchal. And I "welcome" to you in this repo';  // Method 5
// console.log(sentence5);

// #finding String in String
// indexOf():- Return index of given sub String in indexOf() method. 
//==> Return -1 if not found.
// let myBioData="This is Maruti Panchal";
// console.log(myBioData.length);
// console.log(myBioData.indexOf("Maruti"));
// console.log(myBioData.indexOf("is"));
// console.log(myBioData.indexOf("is",3));
// console.log(myBioData.indexOf('i'));

// #Searching a String in String
// search() :- Search a string as specified value in method and return its index.
//==> Return -1 if not found.
// let myBioData="This is Maruti Panchal";
// let searchData=myBioData.search("Maruti");
// console.log(searchData);

// #Extracting String Part
/*There are 3 methods to extract
==> slice(start,end):- The slice() method extracts a portion of a string and returns a new string.
==> substring(start,end) :- Similar to the slice but does not accept negative indices.
==> substr(start,length) :- The substr() method returns a substring starting from a specified index and with a specified length.*/

// // #slice
// const strr = "Hello, World!";
// const sliced = strr.slice(7, 12);
// console.log(sliced); // Output: World

// // #substring
// const strrr = "Hello, World!";
// const sub = strrr.substring(7, 12);
// console.log(sub); // Output: World

// // #substr
// const str = "Hello, World!";
// const substr = str.substr(7, 5);
// console.log(substr); // Output: World


//let slice_word="apple,bananaa,kiwi"; // you can't use let cuz let can't allow to re-declare the variable in same scope.

// var slice_word="apple,bananaa,kiwi"; 
// console.log(slice_word.slice(0,4));
// let slice_word1="apple";
// let slice_word2="bananaa";
// console.log(slice_word1.slice(0,2));
// console.log(slice_word2.slice(0,2+1));

// #replace("word","replacement Word") :- The replace() method replaces a specified substring with another substring.
// const str="Hello World";
// const substr=str.replace("World","Dosto");
// console.log(substr);  // Output : Hello Dosto

// #replaceAll("word","replacement Word"):- The replaceAll() method is similar to replace(), but it replaces all occurrences with the specified substring.
// const str="Hello World,Hello World,Hello World";
// console.log(str.replaceAll("World","Dosto")); // output : Hello Dosto,Hello Dosto,Hello Dosto

// toUpperCase() :- Convert in Capital letters
// const str="Hello World";
// console.log(str.toUpperCase());
// toLowerCase() :- Convert in lower letters
// const str1="Hello World";
// console.log(str1.toLowerCase());

//#conat():- The concat() method joins two or more strings and returns a new string.
// const str1="Maruti";
// const str2="Panchal";
// console.log(str1.concat(str2));
// console.log(str2.concat(str1));
// console.log(`${str1} ${str2}`);

//#String trim() / trimStart() / trimEnd(): These methods remove whitespace characters from the beginning, end, or both sides of a string.
// const str="     Hello    World      ";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// #charAt() :- The charAt() method returns the character at a specified index in a string.
// const str="Hello world";
// console.log(str.charAt(8));

// #charCodeAt(number):- The charCodeAt() method returns the Unicode value of the character at a specified index.
// const str="Hello World";
// console.log(str.charCodeAt(10));  //100

// #split():- The split() method divides a string into an array of substrings based on a specified delimiter.
// const str="apple,bananaa,kiwi";
// console.log(str.split(","));   // output :- [ 'apple', 'bananaa', 'kiwi' ]



