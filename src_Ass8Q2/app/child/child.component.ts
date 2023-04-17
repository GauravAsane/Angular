import { Component , Output, Input, EventEmitter , OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  @Output() public MyEvent = new EventEmitter();
  @Input() public parentdata : any;

  public SendEvent()
  {
    this.MyEvent.emit("Hello from child component");
  }
  constructor()
  {

  }

  ngOnInit(): void {
    {

    }
  }
}
