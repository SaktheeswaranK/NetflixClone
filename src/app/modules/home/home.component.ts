import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  bannerResult : any = [];
  trendingResult : any = [];
  actionResult: any =[];
  animationResult: any;
  docResult : any;
  comedyResult: any;
  sciResult : any;
  thrillResult : any;
  subscriptions !: Subscription;

  constructor(private service : MovieApiService, private http : HttpClient) { }

  ngOnInit(): void {
    // this.onScroll();
    this.getBannerResult();
    this.getTrendingMoviesResult();
    this.getActionMoviesResult();
    this.getAnimationMoviesResult();
    this.getComedyMoviesResult();
    this.getDocMoviesResult();
    this.getSciMovies();
    this.getThrillerResult();  
  }

  // bannerData
  getBannerResult (){
    this.subscriptions = this.service.getBanner().subscribe( (res)=> {
      console.log(res,'bannerResult#');
      this.bannerResult = res.results;
    } )
  }

  //trending movies
  getTrendingMoviesResult() {
    this.subscriptions = this.service.getTrendingMovies().subscribe((res) => {
      console.log(res,'TrendingMovieRes#');
      this.trendingResult = res.results;
    })
  }

  //action movies
  getActionMoviesResult() {
    this.subscriptions =this.service.fetchActionMovies().subscribe((res=> {
      console.log(res,'Action movies#');
      this.actionResult = res.results;
    }))
  }

  //animation movies
  getAnimationMoviesResult() {
    this.subscriptions =this.service.fetchAnimationMovies().subscribe((res) => {
      console.log(res, 'Animation Movies#');
      this.animationResult = res.results;
    })
  }

  // comedy movies
  getComedyMoviesResult() {
    this.subscriptions =this.service.fetchComedyMovies().subscribe((res) => {
      console.log(res,'comedymovies#');
      this.comedyResult = res.results;
    }) 
  }

  //doc movies
  getDocMoviesResult() { 
     this.subscriptions = this.service.fetchDocumentaryMovies().subscribe((res) => {
      console.log(res, 'docMOvies#');
      this.docResult = res.results;      
     })
  }

  //Sci-fi movies
  getSciMovies() {
    this.subscriptions = this.service.fetchScienceFictionMovies().subscribe((res) => {
      console.log(res, 'sciRes#');
      this.sciResult = res.results;
    })
  }

  //Thriller movies
  getThrillerResult() {
    this.subscriptions = this.service.fetchThrillerMovies().subscribe((res)=>{
      console.log(res, 'thriller res#');
      this.thrillResult = res.results;
    })
  }

  ngOnDestroy(): void {
      this.subscriptions &&  this.subscriptions.unsubscribe();
  }

}
