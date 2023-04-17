import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{str}}</h1>
  <input  type = "text">
  `,

  styles: [`
  h1
  {
    color : blue;
  }`
      ]
})
export class AppComponent {
  title = 'Assignment_6';

  public str = "Marvellous Infosystems";
}
