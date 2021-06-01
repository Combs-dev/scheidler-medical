import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMobile: boolean = false;
  menuOpen: boolean = false;

  constructor() {
    if (window.visualViewport.width > 768) {
      this.menuOpen = true;
    } else {
      this.isMobile = true;
    }
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.visualViewport.width > 768) {
      this.isMobile = false;
      this.menuOpen = false;
    } else {
      this.isMobile = true;
      this.menuOpen = false;
    }
  }

  toggleMenu(navList: HTMLElement): void {
    if (navList.style.height === '0') {
      navList.style.height = 'auto';
    } else {
      navList.style.height = '0';
    }
  }
}
