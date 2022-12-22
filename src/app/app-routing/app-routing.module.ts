import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { SearchComponent } from '../modules/search/search.component';
import { MovieDetailsComponent } from '../modules/movie-details/movie-details.component';


const routes : Routes = [
  {path:'',component:AppComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
