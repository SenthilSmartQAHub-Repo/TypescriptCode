
class Student
{
 // variable and methods

 studentMark1:number=70;//Type Annotation
 studentMark2=50;//TypeInference

 display1()
 {
    console.log(this.studentMark1)
    console.log(this.studentMark2)
 }
 display2():string
 {
   return "welcome"
 }


}
const studentobj=new Student() 
studentobj.display1()
console.log(studentobj.display2())
