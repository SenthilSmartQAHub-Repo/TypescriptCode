


class Bank
{
private accountNumber:number=102321
//getters method--> get the value
get accountNumberValue()
{
  return this.accountNumber;
}
// setters method--> change the value
set changeAccountNumber(accountvalue:number)
{
    this.accountNumber=accountvalue
}
}
const obj=new Bank();
console.log(obj.accountNumberValue)
obj.changeAccountNumber=10
console.log(obj.accountNumberValue)