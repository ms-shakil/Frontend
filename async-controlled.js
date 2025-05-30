// control callback Function

const takeOrder =(customer,callback)=>{
    console.log(`Take  order ${customer}`)
    callback(customer)

}

const  processOrder =(customer,callback)=>{
    console.log(`Process order for ${customer}`)
    setTimeout(()=>{
     console.log(`Processed order for ${customer}`)
     callback(customer)
    },3000)
}

const completedOrer=(customer)=>{
    console.log(`completed order for ${customer}`)
}

takeOrder("Customer 1",(customer)=>{
    processOrder(customer,(customer)=>{
        completedOrer(customer)
    })
})