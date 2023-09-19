const calculateLargestValue=(arr)=>{
    for(let index of arr){
        if(index>0){
            large=index;
        }
    }
    return large;
}

const arr=[1,2,3,4,5,6,7,8,9];
console.log(calculateLargestValue(arr));