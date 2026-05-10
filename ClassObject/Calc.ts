
class Calc
{
 value1:number=0;
 value2:number=0;

 sum(a:number,b:number)
 {
   this.value1=a;
   this.value2=b;
   console.log(this.value1+this.value2)

 }
 
 constructor()
 {
    
 }

}
const obj1=new Calc();
obj1.sum(10,20)