const accountId=12345
let accountHolderName="Maruti Panchal"
var accountEmail="maruti@gmail.com"
accountCity="Pune"
let accountState
// This will give output in normal format
console.log("***********************************")
console.log(accountId)
console.log(accountHolderName)
console.log(accountEmail)
console.log(accountCity)
console.log(accountState);
console.log("***********************************")
// accountId=100000;
accountCity="Latur"
// console.log(accountId)  // This will give error cuz u can't change the const value.
//console.log("***********************************")
// This will give output in table format
console.log("***********************************")
console.table([accountId,accountHolderName,accountEmail,accountCity,accountState])