

class Demo
{

    x:number=10;//non-static varaible
    static y:number=20;//static varaiable

    display()
    {
        console.log(Demo.y)
        console.log(this.x)
    }

}
const obj11=new Demo();
console.log(obj11.x)
console.log(Demo.y)
