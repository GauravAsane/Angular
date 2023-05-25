import { Pipe} from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe
{

  transform(value1 : number , value2 : number)
  {
    return value1 * value2;
  }

}
