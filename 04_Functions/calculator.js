// const multiply=(a,b)=>a*b;
// const addition=(a,b)=>a+b;
// const subtraction=(a,b)=>a-b;
// const division=(a,b)=>a/b;
// console.log(multiply(10,5));
// console.log(addition(10,5));
// console.log(subtraction(10,5));
// console.log(division(10,5));




// Q)  Create a Calculator

// Operation Performing function
const sum=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const mul=(a,b)=>{
    return a*b;
}
const division=(a,b)=>{
    return a/b;
}

// Operation calling Function
function calculateValue(a,b,callback){
    return callback(a,b);
}

// Operation passing function
console.log(calculateValue(10,5,sum));
console.log(calculateValue(10,5,sub));
console.log(calculateValue(10,5,mul));
console.log(calculateValue(10,5,division));