// Synchronus code 
console.log("File 1 LOADING...");
console.log("File 1 DOWNLOADING...");
console.log("File 1 DOWNLOADED...");
console.log("File 2 DOWNLOADED...");

////Async code
console.log("File 1 LOADING...");
console.log("File 1 DOWNLOADING...");
setTimeout(()=>{
    console.log("File 1 DOWNLOADED...");
},5000);
console.log("File 2 DOWNLOADED...");



function func1(callback) {
    setTimeout(() => {
   console.log("Task 1 is completed");
    callback()
    }, 2500)
}

function func2(callback) {
    setTimeout(() => {
   console.log("Task 2 is completed");
    callback()
    },1000)
}

function func3(callback) {
    setTimeout(() => {
   console.log("Task 3 is completed");
    callback()
    }, 500)
}

function func4(callback) {
    setTimeout(() => {
   console.log("Task 4 is completed");
    callback()
    }, 2000)
}

//////This is call back hell 

func1(()=>{
    func2(()=>{
        func3(()=>{
            func4(()=>{
                console.log("All Task Completed...")
            })
        })
    })
})
