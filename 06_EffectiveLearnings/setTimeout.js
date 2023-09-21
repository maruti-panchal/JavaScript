// setTimeout()

console.log("first step");
console.log("Second Step");
setTimeout(() => {
  console.log("Inside asynch function");
}, 2000);
const id = setTimeout(() => {
  console.log("Inside Second asynch function");
}, 1000);
console.log("third step");
console.log("clearing second Asynch Function");
clearTimeout(id);
console.log("fourth Step");
