// Decalring objects
const tinderUser = new Object();    // Singletone Object
// const tinderUser1={};              // Non Singletone Object
// console.log(tinderUser);
// console.log(tinderUser1);


tinderUser.id = "123abc"
tinderUser.name = "Vaibhav"
tinderUser.isloggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "maruti",
            lastName: "Panchal"
        }
    }
}
// console.log(regularUser.fullName);  // { userFullname: { firstName: 'maruti', lastName: 'Panchal' } }
// console.log(regularUser.fullName.userFullname);  /// { firstName: 'maruti', lastName: 'Panchal' }
// console.log(regularUser.fullName.userFullname.firstName);   //maruti

// combining the array
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = Object.assign(obj1, obj2);   // combine using assign method
const obj4 = { ...obj1, ...obj2 }      // combine using spread operator.
// console.log(obj3);
// console.log(obj4);

