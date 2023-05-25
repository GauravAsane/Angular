import { Pipe} from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})

export class MarvellousChkPipe 
{

  transform(value: number) : any
  {
    let sum = 0;
    let Cnt = 0;

      for(let i = 1; i <= value/2 ; i++)
      {
        if(value % i == 0)
        {
          Cnt++;
          sum = sum + i;
        }
      }

      if(Cnt <= 1 && value % 2 == 0)
      {
        return 'this is prime as well as even number';
      }

      if ((Cnt <= 1) && (value % 2 != 0))
      {
        return 'this is prime as well as odd number';
      }

      if(value == sum && value % 2 == 0)
      {
        return 'this is perfect as well as even number';
      }

      if (value == sum && value % 2 != 0)
      {
        return 'this is perfect as well as odd number';
      }

      if(Cnt <= 1)
      {
        return 'this is prime number';
      }
      if(value == sum)
      {
        return 'this is perfect number';
      }

      if(value % 2 == 0)
      {
        return 'this is even number';
      }
      else if(value % 2 != 0)
      {
        return 'this is odd number';
      }


  }

}
