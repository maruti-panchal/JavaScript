/*  # Array Methods
==>  length :- It return the length of the Array.
==> toString() :- convert array object type to string type. 
==> pop() :-   This method is used to remove the element from the array from last.
==> push()   :- This is method is used to add the elemennts in array.
==> shift()  :-  The shift() method removes the first array element and "shifts" all other elements to a lower index.The shift() method returns the value that was "shifted out":
==> unshift()  :- It insertat begining with the provided element in method.'
==> join()  :- The join() method also joins all array elements into a string.
==> concat()  :- This method is used to concatinate two arrays.
==> flat()
==> splice()
==> slice()
==> indexOf()  :- It will return the index of provided value in method. and it search in forwoard direction.
==> lastIndexOf()  :- It will return the index of provided value in method. and it search in backwoard direction.
==> include()  :- data is includes in array or not and return boolean value.
==> find() :- It chaeck the .if present then rerturn only one value even there multiple values that are meet the condition but it will return only one value.
==> filter()  :- 
*/

/*

let arr=[10,20,30,40,50,50.2,"Maruti","Amisha","Anisha","Aishwarya"];
let arr1=["Anjali","Sakshi","Krishna","Agastya"];

Searching and filter in an Array
console.log(arr.indexOf(40));
console.log(arr.lastIndexOf(40));
console.log(arr.includes("Maruti Panchal"));
 const prices=[200,300,400,500,600,700,]
 const finfElemenrts=prices.find((currVal)=>currVal<400);   
 console.log(finfElemenrts);   // 200
 const finfElemenrts1=prices.findIndex((currVal)=>currVal<400); 
 console.log(finfElemenrts1);   // 0
console.log(arr[arr.length-1]);
console.log(arr.length);                    //10
console.log(typeof arr);                   //object
let arr_string=toString(arr);            
console.log(typeof arr_string);          //string
console.log(arr.join("_"));             // 10_20_30_40_50_50.2_Maruti_Amisha_Anisha_Aishwarya
console.log(arr.pop());                 //  Aishwarya
console.log(arr);                        //
console.log(arr.push("Ram"));
console.log(arr.push("lakhan"));
console.log(arr);
console.log(arr.shift());    // return 10
console.log(arr.unshift("vaibhav"));
console.log(arr);
console.log(arr.concat(arr1));
console.log(arr.includes("Maruti"));
console.log("A",arr);
const arr2=arr.slice(1,3);
console.log(arr2);
console.log("B",arr);

 // Loops
for(var i=0;i<arr.length;i++){    // for loop
    console.log(arr[i]);
}
console.log(arr);


// After ES6   we have for..in and for..of loop
for(let elemennts in arr1){      // for..in () :- it will return the index number of the elements
    console.log(elemennts);
} 

for(let elemennts of arr1){ 
    console.log(elemennts);    // for..of()   :-  It will return array elements tiill array size.no need i++;
}

arr1.forEach(function(elemennts,index,array){      // for each() : - It is combination of for..in  &for..of loop.
    console.log(elemennts+" " + "index : " +index+" "+array);
});

// for each fat arrow
arr1.forEach((elemennts,index,array)=>{      // for each() : - It is combination of for..in  &for..of loop.
    console.log(elemennts+" " + "index : " +index+" "+array);
});
*/

 