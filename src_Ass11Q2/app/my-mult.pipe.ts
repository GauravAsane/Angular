import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    let ans : any =  value;
    let no1 : any = args[0];
    let no2 : any = args[1];

    ans = no1 * no2;

    return ans;
  }

}
