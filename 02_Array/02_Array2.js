Concatination
const marvelHeros=["Iron Man","Thor","Captain America","Hulk"];
const dcHeros=["Flash","Super Man","BatMan"];
const allHeros=marvelHeros.concat(dcHeros);
console.log(marvelHeros);
console.log(dcHeros);
console.log(allHeros);

// Spread Operator
const all_new_heros=[...marvelHeros,...dcHeros];
console.log(all_new_heros);

//flat :- There are nested array then it will return all elemem=nts in single array.
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
console.log(another_array);
console.log(real_another_array);

// isArray()   Array --> class
console.log(Array.isArray("Maruti Panchal"));
console.log(Array.from("Maruti Panchal"));
console.log(Array.from({name:"Maruti"}));

// converting multiple variable into array
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));