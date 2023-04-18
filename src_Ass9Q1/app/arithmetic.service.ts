import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{


    public Add(i : number , j : number)
    {
      return i + j;
    }

    public Sub(no1 : number , no2 : number)
    {
      return no1 - no2;
    }

 
}
