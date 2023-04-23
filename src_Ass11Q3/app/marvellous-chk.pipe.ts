import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param : string): any
  {
    let Ans : string = "";
    if(param == "Prime")
    {
      for(let i = 2 ; i <= value /2 ; i++)
      {
        if(value % i == 0)
        {
          Ans = "It is Not prime Number";
          break;
        }
        else
        {
          Ans = "It is Prime Number";
        }
      }
    
    }
    else if(param == "Perfect")
    {
      let Sum = 0;
      for(let i = 1 ; i <= value /2 ; i++)
      {

        if(value % i == 0)
        {
          Sum = Sum + i;
        }
      }

      if(Sum == value)
      {
        Ans = "It is perfect number"
      }
      else
      {
        Ans = "It is not perfect number"
      }
    }
    else if(param == "Even")
    {
      if(value % 2 == 0)
      {
        Ans = "It is even number";
      }
      else 
      {
        Ans = "It is not even number";
      }
    }
    else if(param == "Odd")
    {
      if(value % 2 != 0)
      {
        Ans = "It is Odd number";
      }
      else 
      {
        Ans = "It is not Odd number";
      }    
    }
    
    return Ans;
    
  }


}
