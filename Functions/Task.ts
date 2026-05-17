
//c=Optional Parameters
//Default Parameters:
function add(a:number,b:number,c?:String,portNumber=8080):void
{
    console.log(c)
    console.log(a+b)
    console.log(portNumber)
}

add(10,20,"Welcome",8081)
add(10,20)