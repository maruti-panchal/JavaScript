// Sets are also itrable like array but its not array
// set is used to store the unique values 
// In Sets there is no index concept.We can not access the data using index.
// Sets are not intended to replace Array.
// Sets Methods
/*
size :- calculate the toatl unique elements.
has() :- It chech the given value is prest or not. retur boolean values.
add() :- It will the provided data in sets.
delete() :- It is used to delete the element.


*/


const orderSets=new Set(['Pizza','Pasta','Dosa','Idali','Vada Pav','Pizza','Pasta','Dosa','Idali','Vada Pav','Pizza','Pasta','Dosa','Idali','Vada Pav']);
console.log(orderSets);
console.log(orderSets.size)
console.log(orderSets.has('Vada Pav'));
console.log(orderSets.has('Samosa'));
console.log(orderSets.add('Samosa'));
console.log(orderSets.has('Samosa'));
for(let menu of orderSets) console.log(menu);

/* Q)  Sort given array or keep only unique values in array
==> we must use set and once all unique elemnts are available in sets then we must convert that set into array.
==>  ... Spraed Operator unpack the sets and store all values in newly created array. 
*/
const staff=['Waiter','Cook','Chef','Manager','Waiter','Cook','Chef','Manager','Waiter','Cook','Chef','Manager','Waiter','Cook','Chef','Manager']

const UniqueStaff=new Set(staff);
console.log(UniqueStaff); // we need Array
const convertedUniqueStaff=[...UniqueStaff]
console.log(convertedUniqueStaff); // Converted Unique Staff

// direct cnoverted
const UniqueStaff1=[...new Set(staff)];
console.log(UniqueStaff1.length+1);
