// for in loop is used to iterate on on objects.
let data={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6
};
console.log(data);  // op:-  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } // need single-single value
for(let key in data){
    console.log(key); // only getting key
}
for(let key in data){
    console.log(key,data[key]);
}