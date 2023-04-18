import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {


  constructor() { }

  public CountCapital(str : string)
  {
    var temp;
    var count = 0;
    temp = str.split('');

    for(let i = 0 ; i < temp.length ; i++)
    {
      if(temp[i] >= 'A' && temp[i] <= 'Z')
      {
        count++;
      }
    }
    return count;
  }
}
