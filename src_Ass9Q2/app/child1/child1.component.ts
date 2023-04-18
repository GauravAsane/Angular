import { Component , OnInit ,  } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{

  public chk = true;
  public col = "";
  public ans : string = "" ;
  constructor(public nobj : NumberService)
  {

  }

  ngOnInit()
  {
    this.chk = this.nobj.ChkPrime(7);

    if(this.chk == false)
    {
      
      this.ans = "Given number is prime not number";
    }
    else
    {
      this.ans = "Given number is prime number";
    }
  }
}
