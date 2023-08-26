/* 
==> Normal Fuction :- No parameters No Arguments.
==> return function :- return the value from function.

==>function declaration  Syntax
function functionDeclarationSyntax(){
    // body code;
    // body code;
    // body code;
}
functionDeclarationSyntax();     // function calling 
*/

function greetMe(){
    console.log("Hello Guys ! Welcome to JavaScript Language");
}
greetMe();
greetMe();
greetMe();
greetMe();
greetMe();

function greetMe2(){
    return "Returning greetings from greetMe2";
}
const message=greetMe2();
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLowerCase());


 function learningCourses(courseName){
    return("I am Learning"+courseName+"Course very Effectively");
 }
 console.log(learningCourses('JavaScript'));
 console.log(learningCourses('DSA'));
 console.log(learningCourses('Full Stack Web Devlopment'));
 console.log(learningCourses('Database Management System'));


 function learningCourses(courseName){
    return(`I am Learning ${courseName}Course very Effectively`);  // printing by using string literals template
 }
 console.log(learningCourses('JavaScript'));
 console.log(learningCourses('DSA'));
 console.log(learningCourses('Full Stack Web Devlopment'));
 console.log(learningCourses('Database Management System'));



function learningCourses2(courseName,fees){
    return(`I am Learning ${courseName}Course and It's Fees is ${fees}.`);  // printing by using string literals template
 }
 console.log(learningCourses2('JavaScript',1000));
 console.log(learningCourses2('DSA',2000));
 console.log(learningCourses2('Full Stack Web Devlopment',3000));
 console.log(learningCourses2('Database Management System',4000));


 // Dynamically set Parameter by using argumnets key
 function sumOfNumbers(){
    let sum=0;
    for(let i=0;i<arguments.length-1;i++){
        // console.log(arguments);
        sum+=arguments[i];
    }
    return sum;
 }
 console.log(sumOfNumbers(1,2,3,4,5,6,7,8,9,10));