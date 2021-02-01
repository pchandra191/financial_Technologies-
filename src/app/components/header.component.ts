import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  isActive : boolean

  constructor(){
    this.isActive = true;
  }

  

  
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e: any) {
      console.log(window.pageYOffset);
      if (window.pageYOffset <= 70 ) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }


}




