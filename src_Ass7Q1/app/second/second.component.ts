import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent 
{
    public data : string = "Hello from second component";

    public Myclass : string = "success";
}
