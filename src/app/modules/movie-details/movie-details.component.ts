import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit,OnDestroy {

  movieResult : any;
  videoResult : any;
  castResult:any;
  ratings : number = 0;
  voteCount : string = 'sdfs';
  subscritions !: Subscription;
 

  constructor(private service : MovieApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let paramsId = this.router.snapshot.paramMap.get('id');
    this.getMovieResult(paramsId);
    this.getVideo(paramsId);
    this.getCast(paramsId);
  }

  getMovieResult(id: any){
    this.subscritions =  this.service.getMovieDetails(id).subscribe((res: any) => {
      console.log(res, 'Movie Details#');
      this.movieResult = res;
    })
  }

  getVideo(id : any) {
    this.subscritions = this.service.getMovieVideo(id).subscribe((res: any) => {
      console.log(res,'videoResult#');
      res.results.forEach((element:any) => {
        if (element.type == "Trailer") {
          this.videoResult = element.key;
        }
      });
    })
     
  }

  getCast(id:any) {
    this.subscritions = this.service.getMovieCast(id).subscribe((res: any) => {
      console.log(res,'castResult#');
      this.castResult = res.cast;
    })
  }

  ngOnDestroy() {
    this.subscritions && this.subscritions.unsubscribe();
  }

}
