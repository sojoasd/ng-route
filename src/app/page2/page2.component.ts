import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Event } from '_debugger';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('NavigationStart');
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('NavigationEnd');
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
