// ///////////////////HIGH ORDER FUNCTION //////////////
////(1)for each
// it is used to iterate over the elements of an array
// arrayname.forEach(function)
  
let number = [12,21,13,31,14,41,15,51,91]
// number.forEach(sqr)
// function sqr(element){
//     console.log(Math.sqrt(element));
// }

// number.forEach(function(element){
//         return(Math.sqrt(element));
// })

// (2)map()

// let cube=number.map(function(element){
//     return Math.pow(element,3)
// });

// console.log(cube)

//(3)filter()

// const even = number.filter(function(element,index,array){
//     return array[index]=element%2===0
// })

// console.log(even)

const age = [12,43,32,56,14,18,19,33,9,40]
let adults = age.filter(function(element,index,array){
    return array[index]=element>=18
})
console.log(adults)

///(4)reduce

let var1 = [560,344,133,43,8900,133,21323424,422]
const max = var1.reduce(function(prev,curr){
    return prev+curr
})

console.log(max)