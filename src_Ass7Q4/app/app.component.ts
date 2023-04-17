import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment_7';
  public data : string = "";
  public str : string = "Marvellous Infosystems"
  public Upper()
  {
    this.data = this.str.toUpperCase();
  }
  public Lower()
  {
    this.data = this.str.toLowerCase();
  }
}
