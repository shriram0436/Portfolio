import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  navbarOpen = false;
  isScrolled = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('nav-sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('nav-sticky'); 
     }
  }
}
