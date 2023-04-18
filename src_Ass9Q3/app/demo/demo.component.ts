import { Component , OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
public ret = true;
public ans : string = "";
public No : number = 0;

  constructor(public nobj: NumberService , public sobj : StringService )
  {

  }



  ngOnInit()
  {
    this.ret = this.nobj.ChkPrime(7);

    if(this.ret == false)
    {
      this.ans = "Given number is not prime number."
    }
    else
    {
      this.ans = "Given number is prime number."
    }

    this.No = this.sobj.CountCapital("Hello Gaurav ASANE");

  }

}
