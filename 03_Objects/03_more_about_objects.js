/* # Creating Object
==> there are 3 ways to create an objects in javascript.
        1) By object literal
        2) By creating an instance of object directly (Using new keyword).
        3) By using an object constructor (using new keyword)
*/




/*

// # 1)  Object literal  :- curly brackets and key pair valuse then that is Object literals.

var car1={
    name:"Honda City",
    manufacturing:'Honda',
    fuelCapacity:45,
    isAutomatic:true,
    greetMe:function(){       // Inserting behaviour in th object
        console.log("Hello ! Welcome to Honda Show Room");
    }
}

var car2={
    name:"Sonet",
    manufacturing:'KIA',
    fuelCapacity:55,
    isAutomatic:false,
    greetMe:function(){
        console.log("Hello ! Welcome to KIA Show Room")
    }
}
console.log(car1);
console.log(car2);

// Calling function from object
console.log(car1.greetMe());
console.log(car2.greetMe());

// Adding new property in object and updating existing properties of objects
car1.color="Red";
car2.color="Blue";
car1.isAutomatic=false;
car2.isAutomatic=true;

console.log(car1);
console.log(car2);

// There are 2 ways to accessing boject properties
// # Method 1
console.log(car1.name,car1.manufacturing,car1.fuelCapacity,car1.isAutomatic);
console.log(car2.name,car2.manufacturing,car2.fuelCapacity,car2.isAutomatic);

// # Method 2
console.log(car1['name']);
console.log(car2['fuelCapacity'])
console.log(car1['manufacturing'],car1.isAutomatic)


var myDetail={
    name:"maruti Panchal",
    title:"Student",
    experties:['JavaScript','HTML','CSS','nodeJS','DSA','DBMS'],
    cgpa:7.6,
}

*/



/*

// # 2)  Object Using New Keyword 

var myDetail=new Object();
myDetail.name="Maruti Panchal";
myDetail.title="Student";
myDetail.experties=['JavaScript','HTML','CSS','nodeJS','DSA','DBMS'];
myDetail.cgpa=7.6;  
myDetail.greetMe=function(){
    console.log("Hello ! Welcome to My CodeSpace");
}

console.log(myDetail);
console.log(myDetail.greetMe());

*/

// # 3) Object using constructor method

  //  Dynamically Accepting values of object properties.
  
  function Course(instructor,title,description,language,duration,fees,startDate,link){
    this.instructor=instructor;
    this.title=title;
    this.description=description;
    this.language=language;
    this.duration=duration;
    this.fees=fees;
    this.startDate=startDate;
    this.link=link;
  }

  var javascriptCourse=new Course("Maruti Panchal","JavaScript Foundation","Javascript Foundation Course","Hinglish",10,"free","26-8-23","www.google.com");
  var fullStackCourse=new Course("Maruti Panchal","FullStack Course","Full stack Foundation Course","Hinglish",10,"free","30-8-23","www.google.com");

//   console.log(javascriptCourse);
//   console.log(fullStackCourse);

  // deleting specific property of object
  delete javascriptCourse.link;
//   console.log(javascriptCourse);


/*  # Object Methods  

  ==> Object.values() :- gives all values
  ==> Object.keys()  :- gives all keys
  ==> object.freez() :- freez the value
  ==> Object.seal() :- only update the data

*/

/*

console.log(Object.keys(javascriptCourse));    // gives all keys present in the object
console.log(Object.keys(fullStackCourse));    //  gives all values of the object

fullStackCourse.instructor="Vaibhav Panchal";
console.log(fullStackCourse);
Object.freeze(fullStackCourse);
fullStackCourse.instructor="Ram Panchal";
console.log(fullStackCourse);

Object.seal(javascriptCourse)
javascriptCourse.duration=15;
console.log(javascriptCourse);

*/


//  for..in loop
for(var key in javascriptCourse){
    console.log(key);
}
for(var key in javascriptCourse){
    console.log(javascriptCourse[key]);
}