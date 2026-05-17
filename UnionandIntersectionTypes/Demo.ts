


let id:string|number=101;




type EMP={name:string,role:string} // Type Alias 
type Studentinformation={grade:number}  // Type Alias 


let person:EMP&Studentinformation= {
    name: "Alice",
    role: "Developer",
    grade: 10
    
};  

let direction: "left" | "right" | "up" | "down";


direction = "left";

console.log(direction)
