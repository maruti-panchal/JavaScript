const items=['Paav','Aaloo','Oil','Hari Mirch','kothimbir','Chatni'];

// Creating / Producing Promise and stroing in variable

/*
const myVadapvaav=new Promise((resolve,reject)=>{
    if(items.includes('Paav')&&items.includes('Aaloo')&&items.includes('Oil')){
        resolve('Vadapaav');
    }else{
        reject();
    }
});

// Consuming Promise
myVadapvaav.then((receivedVadapav)=>{
    console.log("Here is Your Vada Paav");
}).catch((error)=>{
    console.log("Ingredtients are not Found");
});

*/

// Creating Promise and Returnig it.
function Vadapaav(){
    return new Promise((resolve,reject)=>{
        if(items.includes('Paav')&&items.includes('Aaloo')&&items.includes('Oil')){
            resolve('Vdapaav');
        }else{
            reject();
        }
    });
}
Vadapaav().then((vadapaavReady)=>{
    console.log("Your Vadapaav is Ready");
}).catch(()=>{
    console.log("Ingredients are not available");
})
