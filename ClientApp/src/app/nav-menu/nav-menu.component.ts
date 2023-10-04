import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  navStyle: string;

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { this.collapse()}
    });
    this.navStyle= 'collapsedNav';
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded == false)
      this.navStyle = 'collapsedNav'
    else if (this.isExpanded == true)
      this.navStyle='expandedNav'
  }
  
}
