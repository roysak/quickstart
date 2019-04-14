import { Component } from '@angular/core';

@Component({
  selector: 'main-section',
  template: `New Section - {{name}}
    <ul>
      <li *ngFor="let list of lists">{{list.name}} - {{list.std}}</li>
    </ul>
  `,
})
export class MainSection  { 
  name = 'World';
  lists = [
    {
      name: "Name",
      std: "IV STD"
    },
    {
      name: "Name2",
      std: "V STD"
    },
    {
      name: "Name3",
      std: "VI STD"
    }
  ]
}
