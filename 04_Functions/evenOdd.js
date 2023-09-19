const isEven=(num)=>{
    if(num%2==0){
        return (`${num} is Even Number `);
    }else{
        return (`${num} is Odd Number`);
    }
}

const result=(isEven(10));
console.log(result);