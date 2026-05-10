

class Emp
{
 
    empSalary:number;

    constructor(a:number)
    {
      this.empSalary=a;
    }

}
const empobj=new Emp(10);
console.log(empobj.empSalary)
const empobj1=new Emp(100);
console.log(empobj1.empSalary)