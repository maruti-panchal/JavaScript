// In javaScript array we can store different types of values
// array declaration
/*
var arr=[10,20,30,40,50];
console.log(arr);                      // Display all elements
console.log(arr[2]);                  // 30  displaying index based
for(var i=0;i<5;i++){                // Displaying array
    console.log(arr[i]);
}
var sum=0;                               // calculating Sum
for(var i=0;i<5;i++){
    sum+=arr[i];
}
console.log("Total Sum isc :- ",sum);
var arr1=[10,20,30,40,true,"Maruti"];    // Multiple types of elements in Array
console.log(arr1);
for(var i=0;i<6;i++){
    console.log(arr1[i]);
}
*/

// # Dynamic Array
let a=prompt("Enter Array Size")
let size1=Number.parseInt(a)
  let arr=new Array();
  for(let i=0;i<size1;i++){
    arr[i]=prompt("Enter Elements ");
  }
  for( let i=0;i<size1;i++){
    console.log(arr[i]);
  }