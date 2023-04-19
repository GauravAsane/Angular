import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent 
{
  public books  = [

  {"BookName" : "Angular - ng-book_ The Complete Book on Angular"},

  {"BookName" : "C  - Programming in C  by Ajay Mittal"},

  {"BookName" : "Linux OS - Linux.System.Programming"},

  {"BookName" : "Automation - Automate the Boring Stuff with Python"},

  {"BookName" : "Artificial Intelligence - Artificial Intelligence- A Modern Approach"}
]
}
