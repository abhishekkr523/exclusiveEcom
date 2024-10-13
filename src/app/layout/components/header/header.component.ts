import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  navItems = ['Home', 'Contact', 'About', 'Sign Up'];
  activeItem!: string;
  constructor(private router: Router, private authService: AuthService) {}
  userLogin: any;
  ngOnInit(): void {
    const key = JSON.parse(localStorage.getItem('key') || 'null');
    this.userLogin=key;
    // this.authService.isLoggedIn.subscribe((data)=>{
    //   this.userLogin = data;
    // })
  }
  setActive(item: string) {
    this.activeItem = item;

    // Navigate to the appropriate component when the item is clicked
    this.router.navigate([this.getRouterLink(item)]);
  }

  getRouterLink(item: string): string {
    switch (item) {
      case 'Home':
        return '/home';
      case 'Contact':
        return '/contact';
      case 'About':
        return '/about';
      case 'Sign Up':
        return '/userAuth';
      default:
        return '';
    }
  }

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
    if (
      sidebar &&
      !sidebar.contains(event.target as Node) &&
      hamburger &&
      !hamburger.contains(event.target as Node)
    ) {
      this.isSidebarOpen = false;
    }
  }

 

  logout() {
    // Remove specific data from localStorage
    localStorage.removeItem('users'); 
    localStorage.removeItem('key');
    // Optional: Redirect to the login page
    this.router.navigate(['/userAuth']);
  }
}
