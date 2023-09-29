/*
// Print array
console.log('--------------------------------------------');
const arr=[1,2,3,4,5,6,7,8,9];
arr.forEach(function(num){     // Way 1
    console.log(num);
})
console.log('--------------------------------------------');

// Coverting abve into arraow function
arr.forEach((num)=>{          // Way 2
    console.log(num);
})
console.log('--------------------------------------------');
arr.forEach((num)=>console.log(num));  // Way 3
console.log('--------------------------------------------');
arr.forEach(num=>console.log(num));       // Way 4
console.log('--------------------------------------------');
*/

/*
// write 2's Table
const table=[1,2,3,4,5,6,7,8,9,10];
twoTable=2;
console.log('--------------------------------------------');
table.forEach(function(num){     // Way 1
    console.log(`${twoTable} * ${num}=`,twoTable*num);
})
console.log('--------------------------------------------');
table.forEach((value)=>{           // way 2
    console.log(`${twoTable} * ${value}=`,twoTable*value);
})
console.log('--------------------------------------------');
table.forEach((value)=>console.log(`${twoTable} * ${value}=`,twoTable*value));
console.log('--------------------------------------------');
table.forEach(value=>console.log(`${twoTable} * ${value} = `,twoTable*value));
console.log('--------------------------------------------');
*/

/*

// Sum of numbers
const newArr=[1,2,3,4,5,6,7,8,9];
let sumArray=0;
console.log('--------------------------------------------');
newArr.forEach(function(val){   // Way 1
    sumArray+=val;
})
console.log("Toatal Sum is:- ",sumArray);
console.log('--------------------------------------------');
newArr.forEach((val)=>{    // way 2
    sumArray+=val;
})
console.log("Toatal Sum is:- ",sumArray);
console.log('--------------------------------------------');
newArr.forEach((element) =>sumArray+=element);   // Way 3
console.log("Toatal Sum is:- ",sumArray);
console.log('--------------------------------------------');
newArr.forEach(ele=>sumArray+=ele);     // Way 4
console.log("Toatal Sum is:- ",sumArray);
console.log('--------------------------------------------');

*/

/*

// filter()
let numArray=[12,-1,3,6,-100,0,55,-87,'a','b','c'];
// filter all positive value
console.log("------------Positive value-------------");
const positiveValue=numArray.filter(function(ele){
    return ele>0;
})
console.log(positiveValue);
console.log("------------Negative value-------------");
const neagtiveValue=numArray.filter(ele=>ele<0);
console.log(neagtiveValue);

*/

// map
// mapping with Array
// Map student number with values
// const data=[1,2,3,4,5,6,7,8,9,10];
// console.log("--------------Before Mapping--------------");
// console.log(data);
// console.log("--------------After Mapping--------------");
// const studentData=data.map(function(ele){
//     return "student no"+ele;
// })
// console.log(studentData);

// mapping with Object
// mapp college name with objarr objects.
const objArr=[
        {name:'Maruti',place:'Pune'},
        {name:'Tushar',place:'Jammu'},
        {name:'Ayush',place:'Kashmir'},
        {name:'Akshit',place:'Delhi'},
        {name:'Devarsh',place:'Gujrat'},
        {name:'Akarsh',place:'Punjab'},
        {name:'Utkarsh',place:'Hariyana'}
    ];
    console.log("--------------Before Mapping--------------");
    console.log(objArr);
    console.log("--------------After Mapping--------------");
    const newObjectArray=objArr.map(function(ele){
        return {...ele,college:"SIT"};
    })
    console.log(newObjectArray);