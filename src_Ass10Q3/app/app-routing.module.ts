import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnolgiesComponent } from './technolgies/technolgies.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';


const routes: Routes = [
  {path : 'Books' , component : BooksComponent},
  {path : 'Technologies' , component : TechnolgiesComponent},
  {path : '' , component : TechnolgiesComponent},
  {path : '**' , component : WrongRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
