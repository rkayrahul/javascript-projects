
fetch("https://fakerapi.it/api/v2/addresses?_quantity=1")
.then(value => value.json())
.then((data)=>{
    const dataString = JSON.stringify(data);
    console.log(data)})


const obj = { name: "Rahul", age: 22 };

const str = JSON.stringify(obj);
console.log(str);






// method to fetch api data 
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
















// JSON
// json => javascript object notation
// it is commonly used to send and receive the data through the servers
// {}, [], [{}, {}, {}]

// const names = ["aman", "raman", "vansh"]
// const person = {
//     "name": "aman",
//     "age": 22,
//     "isStudent": true
// }

// const people = `[
//     {
//     "name": "aman",
//     "age": 22,
//     "isStudent": true
// },
// {
//     "name": "aman",
//     "age": 22,
//     "isStudent": true
// },
// {
//     "name": "aman",
//     "age": 22,
//     "isStudent": true
// },
// {
//     "name": "aman",
//     "age": 22,
//     "isStudent": true
// }
// ]

// // string to json => JSON.parse()

// const nameJson = JSON.parse(names)
// console.log(nameJson);

// // console.log(names);
// // console.log(people);
// // console.log(person);

// // json to string => string functions 
// // JSON.stringify()
