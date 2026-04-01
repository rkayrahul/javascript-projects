
function analyzeNumber(num) {
    num=Number(num)
    console.log("Square=",num*num)
if (num>=0) {
    console.log("positive")
    {
        if (num%2===0) {
            console.log("even")
            
        } else {
            console.log("odd")
            
        }
    }
    
} else {
    console.log("negative")
    
}}
analyzeNumber(89);

// ///// object in js/////
// const Student={
//     Name:"John",
//     Age:23,
//     Course:"MCA"
// }
 
// // there are two way to access properties of object 

// console.log(Student)
// // Dot Notation
// console.log(Student.Name);
// // Bracket Notataion
// console.log("Course",Student["Course"])


// // 2️⃣ Add Property Create an object mobile with: brand price
// const Mobile={
//     Brand:"Realme",
//     price:15000,

// }
// console.log("Mobile", Mobile)
// Mobile.Color="Black"
// console.log(Mobile)

// const BOOK={
//     title:"xyz",
//     author:"ABC",
//     price:100,
// }
// console.log(BOOK)
// console.log("Update price",BOOK.price=200)

// const employee={
//     id:101,
//     employee_name:"John Doe",
//     salary:10000,

// }
// console.log(employee)
// console.log(employee.employee_name)
// console.log(delete employee.salary)
// console.log("Employee details",employee)


// const user={
//     name:"Alice",
//     address: {street: "123 Main St",
//       city: "New York",
//       state: "NY",}
// }
// console.log("user details",user)
// console.log("city",user.address.city)

// //function inside function
// const operation={
//     add:function(a,b){
//         console.log(a+b)
//     },
//     sub:function(a,b){
//         console.log(a-b)
//     },
//     multiply:function(a,b){
//         console.log(a*b)
//     },
//     divide:function(a,b){
//         console.log(a/b)

//     },

// }
// operation.add(23,23);
// operation.sub(12,34);
// operation.multiply(43,34);
// operation.divide(14678,2);

// const partner = {
//    name: "David",
//    age: 30,
//    department: "HR",
//    salary: 50000,
//    skills: ["Communication", "Teamwork", "Problem-solving", "Leadership"],
//    address: {
//       street: "123 Main St",
//       city: "New York",
//       state: "NY",
//       hello: {
//          hi: "hello",
//       },
//       zip: "10001"
//    }
// }
// console.log(partner.skills[3])
// console.log(partner.address.zip)
// console.log(partner)
// const Partner=Object.freeze(partner)
// partner.name="Charlie"
// console.log(partner)