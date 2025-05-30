const x = ["shakil", "Nafi"];
x.push("Sahabuddin");
console.log(x);
const name = "Shakil"; // let variable  value can update but const variable can't update

// Data Type

let length, weight;
length = 16;
weight = 5.7;

let colour = "yellow";
let bol = true;
let bol2 = false;

let Person = { Name: "Shakil", Age: 23 };
let array = ["Mango", "Banana", "Apple"];
const date = new Date("2020-02-23");

// Object

let Student = { Name: "ms", District: "comilla", Age: 23 };

Student["University"] = "UIU";
console.log(Student.Name);

//Array

Student2 =["MS Shakil","Comilla",22]
Student2[0]="Sajeen"
Student2.push("Kocukhet")
console.log(Student2)


// Function

function myFun(){
    console.log("Hello form my fun")
}

myFun()

let arrowFun =()=>{
    console.log("hello from Arrow Funcition")
}
arrowFun()


// Loop and condition

let Range =30

for(let i=0;i<=Range;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log("Not in FizzBuzz")
    }
}

let i=0
while(i<=5){
    console.log(i)
    i++
}


// Error and Precedence

let number=10
try{
    // ++number
    if(number==10) throw "is 10";
}
catch(err){
    // --number
    if(number !=10) throw "number decresied";
}