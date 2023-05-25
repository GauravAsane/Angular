import { Pipe} from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe 
{

  transform(value1 : number , value2 : number) 
  {
    return value1 + value2;
  }

}
