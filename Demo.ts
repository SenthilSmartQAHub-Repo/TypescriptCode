

let studentInfo:any="Chennai"

let studentRollNumber:unknown="ABC01"

console.log(studentInfo.toUpperCase())


// if(typeof studentRollNumber==="string")//type checking
// {
// console.log(studentRollNumber.toLowerCase())
// }

// Type Assertion-- as or <>

//console.log((studentRollNumber as string).toLowerCase())

//console.log((studentRollNumber as string).toLowerCase())

console.log((<string>studentRollNumber).toLowerCase())