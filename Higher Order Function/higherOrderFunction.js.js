/*  

==> First Order :- The Function that use only primitives data types or objects as a arguments,and only return primitive or objects are named first-Order.
==> Function are treated as first-class citizens in javascript which means that function can be
    1) Assigned to different variables
    2) Passed as arguments to different functions.
    3) returned from different functions.
==> Function that accept another function as arguments or return another function,are infact,Higher-Order functions.

*/


/*

// 1) Assigned to different variables
var getSeven=function(){
    return msg="This ids Higher Order Function";
};
console.log(getSeven());


//  2) Passed as arguments to different functions.
function passedFunction(fn){
    return fn();
}
 console.log(passedFunction(getSeven));

//  3) returned from different functions.
function returnFunction(){
    return getSeven;
}

 const returnValue=returnFunction();
 console.log(returnValue());

 */


// Create Generic Calculator
function sum(x,y){
    return x+y;
}

function subtraction(x,y){
    return x-y;
}

function multiplication(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}

function calculatorFunction(fn,x,y){
    return fn(x,y);
}


console.log(calculatorFunction(sum,5,5));
console.log(calculatorFunction(subtraction,5,5));
console.log(calculatorFunction(multiplication,5,5));
console.log(calculatorFunction(division,5,5));