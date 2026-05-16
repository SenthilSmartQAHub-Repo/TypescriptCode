


class BasicCalc{

    add(a:number,b:number){

       console.log(a+b)

    }

}
class programmerCalc extends BasicCalc{

    add(a:number,b:number){

       console.log(a+b+6)

    }
}
const obj1=new BasicCalc()

obj1.add(10,20)