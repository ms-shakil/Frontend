// // Synchronous code

// const processOrder =()=>{
//     console.log("Processing order for customer 1")
//     let currentTime = new Date().getTime()
//     while(currentTime+3000 >= new Date().getTime())
//     console.log("OrderProcessed for customer 1")
// }

// console.log("Take order for customer 1")
// processOrder()
// console.log("completed order for customer 1")


// Asynchronous



const processOrder2 =()=>{
    console.log("ProcessOrder 1")

    setTimeout(()=>{
        console.log("cooking completed")        // asysnchronus code can't wait for taking time code. 
    },3000)
    console.log("processed order 1")
}

console.log("Take order 1")
processOrder2()
console.log("Completed order   1")