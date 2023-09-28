// There are 3 ways to create object Cloning
// 1) Iteration
// 2) Assign

const src={
    a:1,
    b:3,
    c:4,
    d:5
};
console.log("----------------------------------------");
console.log("Original Object");
 console.log(src); 
 console.log("----------------------------------------");

//cloning object
const destination={};
for(let key in src){
    destination[key]=src[key];
}
console.log("Cloning object Using Iteration");
console.log(destination);
console.log("----------------------------------------");

// Cloning Object
console.log("Cloning Object Using Assign method");
const destination2=Object.assign({},src);
console.log(destination2);
console.log("----------------------------------------");

// Cloning Object 
console.log("Cloning Object Using Spread Operator");
const destination3={...src};
console.log(destination3);
console.log("----------------------------------------");