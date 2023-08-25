// object literals

/*
const mySymb=Symbol("key1");
const jsUser={
    name: "Maruti",
    [mySymb]:"myKey1",
    "full nanme":"Maruti Panchal",
    age:18,
    location: "Pune",
    email:"maruti@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monaday","Saturday"]
}


// methods to select object
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySymb]);


//  symbol datatype
console.log(jsUser[mySymb]);
console.log(typeof jsUser[mySymb]);

// we can change or overwrite the object value
jsUser.email="panchal@gmail.com";
console.log(jsUser.email);

// we can freez the object 
console.log(jsUser.email);
// Object.freeze(jsUser);     
jsUser.email="vaibhav@gmail.com";  // no change
console.log(jsUser.email);
console.log(jsUser);

// we can add a function 
jsUser.greeting=function(){
    console.log("Hello Js User");
}
console.log(jsUser.greeting());
jsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(jsUser.greetingTwo());

*/