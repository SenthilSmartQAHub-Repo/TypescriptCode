
class Test1
{
    //superclass or Baseclass or parent class
    a=10;
    constructor(x:number)
    {

    }
}
class Test2 extends Test1
{
    //subclass or derivedclass or child class
    b=20
    constructor(y:number)
    {
        super(10)
    }
}
const t1=new Test1();
console.log(t1.a)
const t2=new Test2()
console.log(t2.a,t2.b)