// Factory Function

/*
//example 1

function drawRect(len,bre){
    return rectangle={
        length:len,
        breadth:bre,
        drawing(){
        console.log("Drawing Rectangle");
        }
    };
}
const result=(drawRect(5,4));
console.log(result.drawing());

*/

function calculator(num1,num2){
    return calci={
        num1,
        num2,
        add(num1,num2){
        console.log("Addition is:",num1+num2);
    }
    };
    
}

const result=calculator(5,5);
console.log(result.add(5,5));