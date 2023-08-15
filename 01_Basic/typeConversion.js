
let x=123;  // number to string

console.log(x);  //before conversion // 123
console.log(typeof(x)); // number

let convert_x=String(x);  //after conversion
console.log(convert_x); //123
console.log(typeof convert_x); // string
console.log("******************************");

let fname="Maruti";  // string to number

console.log(fname); //before conversion //Maruti

let convert_fname=Number(fname);  //after conversion
console.log(convert_fname);  // gives NaN
console.log(typeof convert_fname); // give number
console.log("******************************");


let y=123;// int to bool
let b=0;    
console.log(y); //before conversion //123
console.log(b);
console.log(typeof y);  // number
console.log(typeof b);

let convert_y=Boolean(y); //after conversion
let convert_b=Boolean(b); 
console.log(convert_y);   //true
console.log(convert_b); 
console.log(typeof convert_y);  // boolean
console.log(convert_b);
console.log(typeof convert_b);

// bool to int 
// string to bool
// bool to string 

// Operations
let a=10;
let c=5;  
console.log(a+c);
console.log(a-c);
console.log(a*c);
console.log(a/c);
console.log(a%c);

let str1="Maruti";
let str2="Panchal";
let str3=str1+str2;
console.log(str3);

console.log("1"+2);      //12
console.log(1+"2");     //12 
console.log("1"+2+2);  //122
console.log(1+2+"2"); //32

console.log(true);        // true
console.log(+true);      //1
// console.log(true+);  //error