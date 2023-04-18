import { Component , OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  public Ans1 : number = 0;
  public Ans2 : number = 0;

  constructor(public _ArithmeticService: ArithmeticService)
  {

  }

  ngOnInit()
  {
     this.Ans1 = this._ArithmeticService.Add(10, 20);

     this.Ans2 = this._ArithmeticService.Sub(20,10);
  }

}
