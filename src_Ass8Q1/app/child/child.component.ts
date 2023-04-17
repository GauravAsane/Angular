import { Component,Output , OnInit ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
   @Output() public MyEvent = new EventEmitter();

   public SendEvent(value : string)
   {
      this.MyEvent.emit(value);
   }

   constructor() {}

   ngOnInit()
   {
     
   }

    
}
