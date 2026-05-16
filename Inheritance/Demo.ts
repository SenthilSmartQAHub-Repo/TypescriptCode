
class A 
{
     x=10;
}
class B extends A
{
    y=20;
}
class C extends B
{
    z=20
}
const cobj=new C()
console.log(cobj.x,cobj.y,cobj.z)