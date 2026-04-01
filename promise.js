function func1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const t1 = true;
            if (t1) {
                resolve("Transaction 1 is completed...")
            } else {
                reject("Transaction 1 is Cancelled !!!!")
            }
        },2000);
    })
    
    }

    function func2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const t2 = true;
            if (t2) {
                resolve("Transaction 2 is completed...")
            } else {
                reject("Transaction 2 is Cancelled !!!!")
            }
        },3000);
    })
    
    }
    function func3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const t3 = true;
            if (t3) {
                resolve("Transaction 3 is completed...")
            } else {
                reject("Transaction 3 is Cancelled !!!!")
            }
        },1000);
    })
    
    }
    function func4(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const t4 = false;
            if (t4) {
                resolve("Transaction 4 is completed...")
            } else {
                reject("Transaction 4 is Cancelled !!!!")
            }
        },100);
    })
    
    }
    function func5(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const t5 = true;
            if (t5) {
                resolve("Transaction 5 is completed...")
            } else {
                reject("Transaction 5 is Cancelled !!!!")
            }
        },500);
    })
    ////chain method 
    }
    // func1().then(value=>{console.log(value);return func2()})
    // .then(value=>{console.log(value);return func3()})
    // .then(value=>{console.log(value);return func4()})
    // .then(value=>{console.log(value);return func5()})
    // .then(value=>{console.log(value);console.log("All Transaction Completed...")})
    // .catch(err=>console.error(err))



    // ASYNC AND AWAIT FUNCTIONIN JS
    async function filerun (){
        try {
            const t1 = await func1()
        console.log(t1);

        const t2 = await func2()
            console.log(t2);

            const t3 = await func3()
            console.log(t3)

            const t4 = await func4()
            console.log(t4)

            const t5 = await func4()
            console.log(t5)

            console.log("All tasks are completed");
            
        } catch (error) {
            console.error(error);
        }
        
            
            
    }

    filerun();