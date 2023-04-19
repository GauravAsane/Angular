import { Component } from '@angular/core';

@Component({
  selector: 'app-technolgies',
  templateUrl: './technolgies.component.html',
  styleUrls: ['./technolgies.component.css']
})
export class TechnolgiesComponent 
{
    public Tech = [
      {"TechName" : "Angular"},
      {"TechName" : "Node Js"},
      {"TechName" : "Android"},
      {"TechName" : "Big Data"},
      {"TechName" : "Artificial Intelligence"}
    ]
}
