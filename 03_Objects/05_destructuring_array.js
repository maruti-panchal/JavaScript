const fruitsArray=['Mango','Apple','Banana','Orange','Kiwi','Pineapple','Greps','Papaya','Watermellon'];

// Withaout Destructoring
console.log(fruitsArray[0]);
console.log(fruitsArray[1]);
console.log(fruitsArray[2]);
console.log(fruitsArray[3]);
console.log(fruitsArray[4]);
console.log(fruitsArray[5]);
console.log(fruitsArray[6]);

// // With Destructuring
const [fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7]=fruitsArray;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const [fruit11,fruit12,,,,fruit13,fruit14]=fruitsArray;
console.log(fruit11);
console.log(fruit12);
console.log(fruit13);
console.log(fruit14);

const [fruit15,fruit16,fruit17,...rest]=fruitsArray;
console.log(fruit15);
console.log(fruit16);
console.log(fruit17);
console.log(rest);
