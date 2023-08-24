/*  # Array Methods
==> Array length :- It return the length of the Array.
==> Array toString() :- convert array object type to string type. 
==> Array pop() :-   This method is used to remove the element from the array from last.
==> Array push()   :- This is method is used to add the elemennts in array.
==> Array shift()  :-  The shift() method removes the first array element and "shifts" all other elements to a lower index.The shift() method returns the value that was "shifted out":
==> Array unshift()  :- It insertat begining with the provided element in method.'
==> Array join()  :- The join() method also joins all array elements into a string.
==> Array concat()  :- This method is used to concatinate two arrays.
==> Array flat()
==> Array splice()
==> Array slice()

*/

let arr=[10,20,30,40,50,50.2,"Maruti","Amisha","Anisha","Aishwarya"];
let arr1=["Anjali","Sakshi","Krishna","Agastya"];
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