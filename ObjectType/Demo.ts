


// let person:any={

//       age:30,
//       personName:'Raj'
// }

let person:{age:number,personName:string}={

      age:30,
      personName:'Raj'
}



let names:any[]= ["Alice", "Bob", "Charlie"];

let names2:Array<any>= ["Alice", "Bob", "Charlie"]


let tuples:[string,number,boolean]=["Selenium",23,true]


enum Gender 
{
   MALE="MALE",
  FEMALE="FEMALE"
}

console.log(Gender.MALE)
console.log(Gender.FEMALE)