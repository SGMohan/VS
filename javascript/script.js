//console.log("Running Well")
//let value = prompt("Enter your name")
//console.log(value)


//console.log(loanAmount);
//var loanAmount = 10000000000;
//console.log(loanAmount);


//Branching statements

/*let day = 5;

switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid data")
        break;
}*/

/*let month = 11
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febrary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default :
        console.log("Invalid Month")
        break;
}*/

/*// Function
//Arrow function
const mul = (num1, num2) => num1 * num2
console.log(mul(2, 3))

//IIFE function
const add = (function (num1, num2) {
    return num1 + num2
})
console.log(add(31, 20))

//Anoynmous function
const sub = function (num1, num2) {
    return num1 - num2
}
console.log(sub(20, 10))

//Named Function
function div(num1, num2) {
    return num1 / num2
}
console.log(div(5, 2))
*/

//console.log("Vannakkam")
//console.log(num)
//var num = 10;
//let num1 = 10;
//console.log(num,num1)

/*const obj = {
    name:"Mohan S G",
    place:"Tanjore",
    gender:"Male",
    dob:"22 Jan 2003",
    company:"Guvi Geeks",
    role:"FSD Student"
}

for (let key in obj) {
    //console.log(key)
    console.log(key, ":", obj[key])
}*/


//Array of objects

const famMem = [
    { name: "Abcd", relation: "Father" },
    { name: "Efgh", relation: "Mother" },
    { name: "Mohan", relation: "Myself" },
    { name: "Ijkl", relation: "Brother" }
]

famMem.forEach((mem) => {
    console.log(mem.name, "-", mem.relation)
})