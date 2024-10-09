import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = ['Home', 'Contact', 'About', 'Sign Up'];
  activeItem!: string;
  isSidebarOpen = false;

  constructor(private renderer: Renderer2) {}

  setActive(item: string) {
    this.activeItem = item;
  }
  // toggleMenu() {
  //   const sidebar = document.getElementById('sidebar');
  //   sidebar?.classList.toggle('active');
  // }
   // Toggle sidebar when clicking the hamburger icon
 toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
  this.preventScroll();
}
preventScroll(){
  if (this.isSidebarOpen) {
    this.disableScroll();
  } else {
    this.enableScroll();
  }
}
  // Disable scroll by setting body overflow to 'hidden'
  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  // Enable scroll by resetting body overflow
  enableScroll() {
    document.body.style.overflow = 'auto';
  }
 // Close sidebar if clicked outside of it
 @HostListener
 ('document:click', ['$event'])
 onDocumentClick(event: MouseEvent) {
   const sidebar = document.getElementById('sidebar');
   const hamburger = document.getElementById('hamburger');
   
   // Check if the clicked target is outside the sidebar and hamburger menu
   if (sidebar && !sidebar.contains(event.target as Node) && 
       hamburger && !hamburger.contains(event.target as Node)) {
     this.isSidebarOpen = false;
   }
 }


 

 
}
