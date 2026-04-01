// Function 
function first(){
    console.log("helolo")
}
first()
let num = 20;
function sqrt(num){
        console.log("Square root of :" ,Math.sqrt(num));
}
sqrt(12);
sqrt(81);

function cbrt(num){
        console.log("cube root :" ,Math.cbrt(num));
}
cbrt(20);
cbrt(81);

// global variable scope 
let x=99;
multiply()
function multiply() {
        console.log("Multiply :",x*20);

        
}
console.log("Multiply:",x*30);


// local variable 
function multiply() {
        let x= 30;
        console.log("Multiply:",x*20);

        
}multiply()
 
// literal with current time date 
function status(name) {
        let now =new Date();
        console.log(`current status at : ${now.toLocaleDateString()} by ${name} on time ${now.toLocaleTimeString()}`);
        // console.log(`current status at date:${now.toLocaleTimeString()}`);

        
}
status("RAHUL");


// Hoisting
// console.log(a);
// let a=23;


// Return
function add(x,y,z) {
        
        return x+y+z        
}
console.log("Sum of the Number is :",add(22,22,22))