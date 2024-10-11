import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss'
})
export class UserAuthComponent {
  isSignUp: boolean = true;  // true for Sign Up, false for Sign In

  toggleForm() {
    this.isSignUp = !this.isSignUp;  // Toggle between Sign Up and Sign In
  }
}
