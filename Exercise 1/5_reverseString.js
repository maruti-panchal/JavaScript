// Q) Write a program that displays a string in reverse order.

const reverseString=(str)=>{
    const reversdString=str.split("").reverse().join("");
    console.log(reversdString);
}
reverseString("Hello");
