import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';
import { MovieDetailsComponent } from './modules/movie-details/movie-details.component';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingPipe } from './pipes/rating.pipe';
import { VoteCountPipe } from './pipes/vote-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    RatingPipe,
    VoteCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
