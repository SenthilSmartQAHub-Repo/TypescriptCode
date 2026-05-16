

class Test1{

    protected a:number=10

}
class Test2 extends Test1{

      display()
      {
        console.log(this.a)
      }

}
const obj=new Test2()
obj.display()
