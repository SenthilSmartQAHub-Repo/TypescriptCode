

class BasicCalc
{
    add(){}
    sub(){}
    mul(){}
    div(){}
}
class ScientificCalc extends BasicCalc
{
    log(){}
}
class programmerCalc extends BasicCalc
{
    bin(){}
    dec(){}
}
const s1=new ScientificCalc()
s1.log()
s1.add()
s1.mul()

const p1=new programmerCalc()
p1.add()
p1.dec()
