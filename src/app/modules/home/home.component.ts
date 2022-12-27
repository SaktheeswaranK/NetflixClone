import { Component, HostListener, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  bannerResult : any = [];
  trendingResult : any = [];
  actionResult: any =[];
  animationResult: any;
  scroll : any;

  constructor(private service : MovieApiService) { }

  // @HostListener('scroll', ['$event']) private onScroll($event:Event):void {
  //   console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
  // };
  
  onScroll(e : Event) {
    console.table(e);
    if(e) {

    }
  }

  ngOnInit(): void {
    // this.onScroll();
    this.getBannerResult();
    this.getTrendingMoviesResult();
    this.getActionMoviesResult();
    this.getAnimationMoviesResult();
  }

  // bannerData
  getBannerResult (){
    this.service.getBanner().subscribe( (res)=> {
      console.log(res,'bannerResult#');
      this.bannerResult = res.results;
    } )
  }

  //trending movies
  getTrendingMoviesResult() {
    this.service.getTrendingMovies().subscribe((res) => {
      console.log(res,'TrendingMovieRes#');
      this.trendingResult = res.results;
    })
  }

  //action movies
  getActionMoviesResult() {
    this.service.fetchActionMovies().subscribe((res=> {
      console.log(res,'Action movies#');
      this.actionResult = res.results;
    }))
  }

  //animation movies
  getAnimationMoviesResult() {
    this.service.fetchAnimationMovies().subscribe((res) => {
      console.log(res, 'Animation Movies#');
      this.animationResult = res.results;
    })
  }

}
