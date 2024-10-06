import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = ['Home', 'Contact', 'About', 'Sign Up'];
  activeItem!: string;

  setActive(item: string) {
    this.activeItem = item;
  }
  // toggleMenu() {
  //   const sidebar = document.getElementById('sidebar');
  //   sidebar?.classList.toggle('active');
  // }
  isSidebarOpen = false;

  // Toggle sidebar when clicking the hamburger icon
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Close sidebar if clicked outside of it
  @HostListener('document:click', ['$event'])
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
