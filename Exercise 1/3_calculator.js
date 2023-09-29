// Q) Write a program that takes two numbers and displays their sum, difference, product, and quotient. 


function add(num1,num2){
    console.log("Addtion is :- ",num1+num2);
}
function subtraction(num1,num2){
    console.log("Subtractyion is :- ",num1-num2);
}
function multiplication(num1,num2){
    console.log("Multiplication is:- ",num1*num2);
}
function division(num1,num2){
    console.log("Division is :- ",num1/num2);
}
function calculator(num1,num2,callback){
    callback(num1,num2);
}
num1=5;
num2=6;
console.log("-------------------------------");
calculator(num1,num2,add);
console.log("-------------------------------");
calculator(num1,num2,subtraction);
console.log("-------------------------------");
calculator(num1,num2,multiplication);
console.log("-------------------------------");
calculator(num1,num2,division);