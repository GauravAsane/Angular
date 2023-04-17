import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment_8';
  
  public data :any = "";

  public InputData(name : any)
  {
      this.data = "Input data length is : "+name.length;
  }

}
