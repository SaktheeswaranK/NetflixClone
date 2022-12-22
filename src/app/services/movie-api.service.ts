import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

  constructor(private http : HttpClient) { }

  // bannerapi
  getBanner() : Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  //trendingmovies
  getTrendingMovies() : Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  //searchmovie
  getMovie(data : any) : Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.searchMovie}`);
  }

}
