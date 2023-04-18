import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public temp = true;
  constructor() { }

  public ChkPrime(no : number)
  {
    for(var i = 2 ; i <= no/2 ; i++)
    {
      if(no % i == 0)
      {
        this.temp = false;
      }
    }
    return this.temp;

  }
}
