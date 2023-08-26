// Destructuring object

let employee={
    emplyeeName:{
        firstName:"Maruti",
        lastName:"Panchal",
    },
    CompanyName: "FoundIt.org",
    location:"Pune",
    age:"25",
    salary:"20000",
    department:"UI/UX",
    address:{
        country:"India",
        state:"Maharashtra",
        dist:"Pune",
        pincode:411021,
    }
}
console.log(employee);

// values extracting of object withaout destructuring. each vale we must use ebject name and dot operator.

console.log(employee.emplyeeName,employee.CompanyName,employee.address,employee.location,employee.salary,employee.age);
console.log(employee.department);
console.log(employee.address);

// by using destruturing
let {emplyeeName,CompanyName,address,location,salary,age,department}=employee;

console.log(CompanyName);
console.log(location);
console.log(salary);
console.log(age);
console.log(department);
console.log(emplyeeName);
console.log(address);

let {emplyeeName:name,CompanyName,address:add,location:loc,salary:sal,age,department:dept}=employee;

console.log(CompanyName);
console.log(loc);
console.log(sal);
console.log(age);
console.log(dept);
console.log(name);
console.log(add);
console.log(add.state);

function displayEmployee(employee){
    console.log(`This is ${employee.emplyeeName.firstName+" "}${employee.emplyeeName.lastName} and I am currently Employee at ${employee.CompanyName}`);
}
// displayEmployee(employee);

function displayEmployee({CompanyName,age,salary}){
    console.log(employee.CompanyName); 
    console.log(employee.age);
    console.log(employee.salary);     
    // employee.age,employee.salary);
}
displayEmployee(employee);