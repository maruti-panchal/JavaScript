// creating coonstructor function
// In construnctor we can not return the boject.
// this keyword are using to reffer currnrt object.

/*
// Example 1 
function Rectangle(length,breadth){
    this.length=length,
    this.breadth=breadth,
    this.draw=function(){
        console.log("Drawing Rectangle",);
    }
}
const resultRectangle=new Rectangle(5,4);
console.log(resultRectangle.length)

*/

// Example 2
function Addition(val1,val2){
    this.value1=val1,
    this.value2=val2,
    console.log(this.value1)
    this.result=function(){
        console.log("Addition is :- ")
    }
}
const addResult=new Addition(5,4);
// console.log(addResult.value1);




// Dynaminc nature of Object
// 1) Adding new Property

    addResult.color="Yellow";
    addResult.model="ABC";
    addResult.price=2000;
    addResult.testDrive=function(){
        console.log("You can ride now");
    }
    // console.log(addResult);
    // console.log(addResult.model)
    // console.log(addResult.testDrive());
    
// 2) Deleting Property of Object
    delete addResult.value2;
    delete addResult.price;
    // console.log(addResult)

    console.log(addResult.constructor);
    console.log(Addition.constructor)

