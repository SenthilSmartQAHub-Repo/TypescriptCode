

class Student
{

   display(studentinfo:string):string
   display(StudentTotalMarks:number):number
   display(isPass:boolean):boolean

   display(studentDetails:any):any
   {
    console.log("This is display method")
    return studentDetails
   }

}

const stuobj=new Student();
console.log(stuobj.display(300))
console.log(stuobj.display(true))
console.log(stuobj.display("chennai"))