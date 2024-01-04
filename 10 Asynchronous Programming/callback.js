// Scenario

/**
 * 1 Register
 * 2 Send welcome email
 * 3 login
 * 4 Get user data
 * 5 display user data
 */



// function delayThreeSeconds() {
//     const start = new Date().getTime();
//     let elapsedTime = 0;
  
//     while (elapsedTime < 3000) {
//       elapsedTime = new Date().getTime() - start;
//     }
  
    
//     // Replace the console.log with any code you want to execute after the delay
//   }
  
  // Call the function to initiate the delay
 
  


// function register(){
//     setTimeout(() => {
//         console.log("register Done")
//         sendEmail();
//     }, 3000);
    
// }
// function sendEmail(){
//     setTimeout(() => {
//         console.log("Email send")
//         login();
//     }, 3000);
    
// }
// function login(){
//     setTimeout(() => {
//         console.log("Login Done")
//         getUserData();
//     }, 3000);
   
// }
// function getUserData(){
//     setTimeout(() => {
//         console.log("got user data")
//         displayUserData();
//     }, 3000);
   
// }
// function displayUserData(){
//     setTimeout(() => {
//         console.log("User data displayed")
//     }, 3000);
    
// }
// register();
// console.log("Written after all function");
// console.log("Hello");


//  Not a Asynchrouns code

// function register(){
//     delayThreeSeconds();
//     console.log("register Done")
// }

// function sendEmail(){
//     delayThreeSeconds();
//     console.log("Email send")  
// }

// function login(){
//     delayThreeSeconds();
//     console.log("Login Done")
// }

// function getUserData(){
//     delayThreeSeconds();
//     console.log("got user data")
// }

// function displayUserData(){
//     delayThreeSeconds();
//     console.log("User data displayed")
// }

// register()
// sendEmail()
// login()
// getUserData()
// displayUserData()
// console.log("Written after all function");
// console.log("Hello");


// function register(callback){
//     setTimeout(()=>{
//         console.log("register Done")
//         callback();
//     },3000)
    
// }

// function sendEmail(callback){
//     setTimeout(()=>{
//         console.log("Email send")
//         callback();
//     },6000)
     
// }

// function login(callback){
//     setTimeout(()=>{
//         console.log("Login Done")
//         callback()
//     },3000)
  
// }

// function getUserData(callback){
//     setTimeout(()=>{
//         console.log("got user data")
//         callback()
//     },3000)
    
// }

// function displayUserData(){
//     setTimeout(()=>{
//         console.log("User data displayed")
//         console.log("Succefully Done ALl call");
//     },3000)
    
// }

// //callback hell :- nesting of a function
// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getUserData(()=>{
//                 displayUserData()
//             })

//         })

//     })

// })

// console.log("Written after all function");
// console.log("Hello");


// Callback Excercise 

/* Simple Callback:
Create a function multiply that takes two parameters (a and b) and a callback function. The callback function should be invoked with the result of multiplying a and */

// function mul(a,b){
//     console.log(a*b);
// }

// function add(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// function div(a,b){
//     console.log(a/b);
// }

// function calculator(a,b,callback){
//     callback(a,b);
// }

// console.log(calculator(10,20,mul));
// console.log(calculator(10,20,add));
// console.log(calculator(10,20,sub));
// console.log(calculator(10,20,div));

/*

Array Transformation:
Write a function mapArray that takes an array and a callback function. The function should apply the callback to each element of the array and return a new array with the modified values.

*/
/*
oldArray=[1,2,3,4,5];
newArray=[];
function findSquare(array){
    array.forEach((ele)=>{
        newArray.push(ele*ele);
    })
}
function mapArray(array,callback){
    callback(array);
}
mapArray(oldArray,findSquare);
console.log(newArray);

*/

/*
Write a function that returns true or false for a given number. We will reuse this function, so make it reusable
*/

// function findEvenOdd(n){
//     if(n%2==0) console.log("Number is Even");
//     else console.log("Number is Odd");
// }
// function toUpperLeter(str){
//     console.log(str.toUpperCase());
// }
// function toLowerLeter(str){
//     console.log(str.toLowerCase());
// }
// function finder(n,callback){
//     callback(n);
// }
// finder(11,findEvenOdd);
// finder('maruti',toUpperLeter);
// finder('PANCHAL',toLowerLeter);

// function step1(callback){
//     setTimeout(()=>{
//         console.log("Step 1 is Executed.")
//         callback();
//     },3000)
    
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log("Step 2 is Executed.")
//         callback();
//     },3000)
   
// }
// function step3(callback){
//     setTimeout(() => {
//         console.log("Step 3 is Executed.")
//         callback();
//     }, 3000);
    
// }
// function step4(callback){
//     setTimeout(()=>{
//         console.log("Step 4 is Executed.")
//         callback();
//     },3000)
  
// }
// function step5(callback){
//     setTimeout(()=>{
//         console.log("Step 5 is Executed.")
//         callback();
//     },3000)
    
// }

// console.log("Need to execute first");
// // Callback hell
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4(()=>{
//                 step5();
//             });

//         });


//     });

// });



// how to resolve callback hell
// we use promise


//  function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("register Done")
//             resolve();
//         },3000)
//     })
        
        
//     }
    
//     function sendEmail(){
//        return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Email send")
//             resolve();
//         },3000)
//        })
         
//     }
    
//     function login(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("Login Done")
//                resolve();
//             },3000)
//         })
      
//     }
    
//     function getUserData(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("got user data")
//                 resolve();
//             },3000)
//         })
        
//     }
    
//     function displayUserData(){
//        return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User data displayed")
//             resolve();
//         },3000)
//        }) 
//     }
//     function doneAllCall(){
//         setTimeout(()=>{
//             console.log("Succefully Done ALl call");
        
//         },3000)
        
//     }


//     register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .then(doneAllCall);

    



//  function register(){
//     return new Promise((resolve,reject)=>{
//         console.log("register Done")
//             resolve();
//     })
        
        
//     }
    
//     function sendEmail(){
//        return new Promise((resolve,reject)=>{
//         console.log("Email send")
//             resolve();
//        })
         
//     }
    
//     function login(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("Login Done")
//                resolve();
//             },3000)
//         })
      
//     }
    
//     function getUserData(){
//         return new Promise((resolve,reject)=>{
//             console.log("got user data")
//             resolve();
//         })
        
//     }
    
//     function displayUserData(){
//        return new Promise((resolve,reject)=>{
//         console.log("User data displayed")
//             resolve();
//        }) 
//     }
//     function doneAllCall(){
//         setTimeout(()=>{
//             console.log("Succefully Done ALl call");
        
//         },3000)
        
//     }


//     register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .then(doneAllCall);


// async-await

// function register(){
//     return new Promise((resolve,reject)=>{
//         console.log("register Done")
//             resolve();
//     })
        
        
//     }
    
//     function sendEmail(){
//        return new Promise((resolve,reject)=>{
//         console.log("Email send")
//             resolve();
//        })
         
//     }
    
//     function login(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("Login Done")
//                resolve();
//             },3000)
//         })
      
//     }
    
//     function getUserData(){
//         return new Promise((resolve,reject)=>{
//             console.log("got user data")
//             resolve();
//         })
        
//     }
    
//     function displayUserData(){
//        return new Promise((resolve,reject)=>{
//         console.log("User data displayed")
//             resolve();
//        }) 
//     }
//     function doneAllCall(){
//         setTimeout(()=>{
//             console.log("Succefully Done ALl call");
        
//         },3000)
        
//     } 

//     async function authorization(){
//         await register();
//         await sendEmail();
//         await login();
//         await getUserData();
//         await displayUserData();
//     }
//     authorization().then(doneAllCall);



 function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register Done")
            resolve();
        },3000)
    })
        
        
    }
    
    function sendEmail(){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Email send")
            resolve();
        },3000)
       })
         
    }
    
    function login(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Login Done")
               resolve();
            },3000)
        })
      
    }
    
    function getUserData(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("got user data")
                resolve();
            },3000)
        })
        
    }
    
    function displayUserData(){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User data displayed")
            resolve();
        },3000)
       }) 
    }
    function doneAllCall(){
        setTimeout(()=>{
            console.log("Succefully Done ALl call");
        
        },3000)
        
    }


    async function authorization(){
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    }
    authorization().then(doneAllCall);















