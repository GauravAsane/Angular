import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public check = true;
  constructor() { }

  public ChkPrime(no1 : number)
  {
    
    for( let i = 2 ; i < no1 /2 ; i++)
    {
      if(no1 % i == 0)
      {
        this.check = false;  
      }

    }
    return this.check;
    
  }
}
