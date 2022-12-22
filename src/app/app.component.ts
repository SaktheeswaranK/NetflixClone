import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetflixClone';
  navbg: any;
  
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrollover#');
    

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'backgroud-color' : '#000000'
      }
    }
    else {
      this.navbg = {
      }
    }
  }

}
