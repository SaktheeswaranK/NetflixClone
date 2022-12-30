import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult : any = [];

  constructor(private service : MovieApiService) { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    searchMovie : new FormControl('')
  })

  search(){
    console.log(this.searchForm.value,'searchMoive#');
    this.service.getMovie(this.searchForm.value).subscribe((res) => {
      console.log(res,'searchResult');
      this.searchResult = res.results;
      sessionStorage.setItem('searchResult',this.searchResult)
    })
    
  }

}
