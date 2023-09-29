/*
console.log("---------------------------------------------");
console.log("Original Array");
let myArray=[1,2,3,4,5,6,7,8,9,10];
console.log(myArray);
console.log(myArray.length);

// Search element
console.log(myArray.includes(5));
console.log(myArray.indexOf(7));

// Insaert at END
console.log("---------------------------------------------");
console.log("Inserting At END");
myArray.push(11);
myArray.push(12,13,14);
console.log(myArray)
console.log(myArray.length);
console.log("---------------------------------------------");

// insert at Begining
console.log("Insert at Begining");
myArray.unshift('A','B','C','D','E');
console.log(myArray);
console.log(myArray.length);
console.log("---------------------------------------------");
console.log("Insert at Middle");
console.log(myArray);
myArray.splice(5,0,'Maruti','Ram','Lakhan');
console.log("---------------------------------------------");
// Removing Element from Array
console.log("Removing from End");
console.log(myArray);
const newarray=myArray.pop();
console.log(newarray);
console.log(myArray);

console.log("---------------------------------------------");
console.log("Removing from Start");
// shift() :- Shit method is used to remove element from starting.
console.log("Removed element is:- ",myArray.shift());
console.log("Removed element is:- ",myArray.shift());
console.log("New Array is:- ",myArray);
console.log("---------------------------------------------");
console.log("Removing from Middle");
// splice () :- splice method is used to remove element from middle.
// Using splice we can add or remove the data from array.

console.log(myArray.splice(2,1));
console.log(myArray.splice(2,2,'Vaibhav'));
console.log(myArray)


console.log("---------------------------------------------");
console.log(myArray);
console.log("---------------------------------------------");
console.log("Emptying Array");
console.log("Before Emptying :- ",myArray);
let newArr=myArray;
myArray=[];  // Method 1
console.log(myArray);
console.log(newArr);
let latestArray=myArray.length=0;
console.log(latestArray);
console.log("---------------------------------------------");
*/

/*
// Concatinate() :- This method is used to cancatinate two Array
const firstArray=[1,2,3,4,5];
const secondArray=[6,7,8,9,10];
//const finalArray=firstArray+secondArray;
const resultArray=firstArray.concat(secondArray);
console.log(typeof firstArray);
// console.log(typeof finalArray);
console.log(typeof resultArray);
console.log(resultArray);
*/

/*
// slice():- It will return specified ranges of values

const arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.slice(2,4));
console.log(arr);
console.log(arr.slice(1,6));
*/

/*
// Spread Operator(...):- It is used to unzip the value.
// It also used for cancatinate the two array
// It also used for createing a new copy of a array

const numArr=[1,2,3,4,5,6,7,8];
const strArr=['Maruti','Vaibhav','Ram','Lakhan'];
const mergedArr=[...numArr,...strArr];
console.log(mergedArr);
for(let key of mergedArr){
    console.log(key);
}

*/

/*

// join() :- This method is used to join the Array elements with provided values in method.
const arr=[1,2,3,4,5,6,7,8,9];
console.log("---------Before Join-----------");
console.log(arr);
console.log(typeof arr);
console.log("---------After Join-----------");
// const newArr=arr.join(',');
// console.log(newArr);
console.log("---------After Join-----------");
const newArr=arr.join('_');
console.log(newArr);
console.log(typeof newArr);

*/

/*

// split() :- It will gives separate values of a string and return arry Object.
const arr="This is Maruti Javascript Repo";
console.log("---------Before Split-----------");
console.log(arr);
console.log(typeof arr);

console.log("---------After Split-----------");
console.log(arr.split(' '));
console.log(typeof arr.split(','));

*/

/*
// sort() :- Used to srt the array
const arr=[17,56,.1,8,9,34,9,34,'a','a','b'];
console.log("-----------Before Sorted-----------");
console.log(arr);
console.log("-----------After Sorting-----------");
const a= arr.sort();
console.log(a);
console.log(typeof a);
// reverse() :- reverse array elements
console.log("-----------After Reverse-----------");
console.log(arr.reverse());
*/











// Array of Object

/*

console.log("---------------------------------------------");
const objArray=[
    {name:'Maruti',place:'Pune',college:'SIT'},
    {name:'Tushar',place:'Jammu',college:'SIT'},
    {name:'Ayush',place:'Kashmir',college:'SIT'},
    {name:'Akshit',place:'Delhi',college:'SIT'}
];
console.log(objArray);
console.log(typeof objArray);
console.log(objArray.length);

// Find element from Array of objects
console.log(objArray.find(function(objArray){
    return objArray.name==='Ayush';
}));

*/

// Combining and Slicing array of object


// const objArr1=[
//     {name:'Maruti',place:'Pune',college:'SIT'},
//     {name:'Tushar',place:'Jammu',college:'SIT'},
//     {name:'Ayush',place:'Kashmir',college:'SIT'},
//     {name:'Akshit',place:'Delhi',college:'SIT'}
// ];
// const objArr2=[
//     {name:'Devarsh',place:'Gujrat',college:'SIT'},
//     {name:'Akarsh',place:'Punjab',college:'SIT'},
//     {name:'Utkarsh',place:'Hariyana',college:'SIT'}
// ];
// const finalObjArray=objArr1.concat(objArr2);  // Using cancatinate
// // console.log(finalObjArray.length)
// console.log(finalObjArray);
// console.log(typeof finalObjArray);

// const objArr3=[...objArr1,...objArr2];  // Concatinate Using Spread Opeartor
// console.log(objArr3);

// // Object Slicing
// console.log(finalObjArray.slice(1,7));
// console.log(finalObjArray.length);




