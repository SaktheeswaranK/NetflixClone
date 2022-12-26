import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieResult : any;
  videoResult : any;
  castResult:any;

  constructor(private service : MovieApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let paramsId = this.router.snapshot.paramMap.get('id');
    this.getMovieResult(paramsId);
    this.getVideo(paramsId);
    this.getCast(paramsId);
  }

  getMovieResult(id: any){
    this.service.getMovieDetails(id).subscribe((res) => {
      console.log(res, 'Movie Details#');
      this.movieResult = res;
    })
  }

  getVideo(id : any) {
    this.service.getMovieVideo(id).subscribe((res) => {
      console.log(res,'videoResult#');
      res.results.forEach((element:any) => {
        if (element.type == "Trailer") {
          this.videoResult = element.key;
        }
      });
    })
     
  }

  getCast(id:any) {
    this.service.getMovieCast(id).subscribe((res) => {
      console.log(res,'castResult#');
      this.castResult = res.cast;
    })
  }

}
