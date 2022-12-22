import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  bannerResult : any = [];
  trendingResult : any = [];

  constructor(private service : MovieApiService) { }

  ngOnInit(): void {
    this.getBannerResult();
    this.getTrendingMoviesResult();
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

}
