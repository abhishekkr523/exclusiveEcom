import { Component } from '@angular/core';

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
}
