function createRectangle(length,breadth){
    return rectangle={
        length,
        breadth,
        draw(){
            console("Drawing Rectangle");
        }
    };
}
console.log(createRectangle(5,4));

function sum(num1,num2){
    return addition={
        num1,
        num2,
        result:num1+num2
    };
}

const result=sum(5,5);
console.log(result);