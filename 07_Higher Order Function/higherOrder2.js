function multiply(){
    return function(x){
        return x*7;
    }
}
const exeMultiply=multiply();
console.log(exeMultiply(5));
