let array=[12,35,32,19,2,78,90,45,22,55,99]
function arrayoper(num) {
    sum=0
    for (let i=0;i<num.length;i++) {
        sum+=num[i];
        
    }
    return{
        totalsum:sum
    };
    
    
}
let result =arrayoper(array);
console.log(result)