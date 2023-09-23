// Q)  Resolve or Reject a Promise after 2 seconds.

function check(){
    return new Promise((resolve,reject)=>{
        const value=true;
        setTimeout(() => {
            if(value==true){
                resolve();
            }else{
                reject();
            }
        }, 2000);
    });
};

check()
    .then(()=>{console.log("Resolve Successfully")})
    .catch(()=>{console.log("You Got Error")});