import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment_7';
  public data : string = " ";
  public Fun()
  {
    this.data=  "Educating for Better tomorrow ";
  }
}
