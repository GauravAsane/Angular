import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent 
{
    public data : string = "Inside the Second Component";

    public Myclass : string = "success";
}
