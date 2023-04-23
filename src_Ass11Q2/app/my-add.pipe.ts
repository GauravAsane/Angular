import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: unknown , ...args: unknown[]): unknown
  {
    let ans = value;
    let no1 : any = args[0] ;
    let no2 : any = args[1];

    ans = no1 + no2
    return (ans);
  }

}
