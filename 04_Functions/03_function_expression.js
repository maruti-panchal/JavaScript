// calling by refference 
// anonymous function and function expression


const addtition=function(a,b){
    console.log(a+b);
}
console.log(addtition(2,2));



const addtition2=function(a,b){
    return a+b;
}
let sum=addtition;
 console.log(sum(2,2));