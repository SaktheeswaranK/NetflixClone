import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult : any;
  result : boolean = true;

  constructor(private service : MovieApiService) { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    searchMovie : new FormControl('')
  })

  search(){
    // this.searchResult.length = 0;
    console.log(this.searchForm.value,'searchMoive#');
    this.service.getMovie(this.searchForm.value).subscribe((res) => {
      console.log(res,'searchResult');
      this.searchResult = res.results;
      // const ret = this.searchResult;
      // console.log(ret.length, 'results#');
      // this.searchResult.length==0 ? this.result = false: this.result = true ;
      this.result = !(this.searchResult.length == 0)
      // sessionStorage.setItem('searchResult',this.searchResult)
    })
    
  }

}
