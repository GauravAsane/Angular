import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnolgiesComponent } from './technolgies/technolgies.component';



const routes: Routes = [
  {path : 'Books' , component : BooksComponent},
  {path : 'Technologies' , component : TechnolgiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
