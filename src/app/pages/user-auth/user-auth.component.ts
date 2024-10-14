import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent {
  isSignUp: boolean = true;  // true for Sign Up, false for Sign In
  user = { name: '', emailOrPhone: '', password: '' };
  errorMessage: string = '';
constructor(private router : Router,private authService: AuthService){

}
  toggleForm() {
    this.isSignUp = !this.isSignUp;  // Toggle between Sign Up and Sign In
  }

  onSubmit(form: NgForm) {
    if (this.isSignUp) {
      this.signUp(form);
    } else {
      this.signIn(form);
    }
  }

  signUp(form: NgForm) {
    const { name, emailOrPhone, password } = form.value;

    if (!name || !emailOrPhone || !password) {
      this.errorMessage = 'All fields are required for Sign Up!';
      return;
    }

    // Save user data to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((user: any) => user.emailOrPhone === emailOrPhone);

    if (existingUser) {
      this.errorMessage = 'User already exists!';
    } else {
      users.push({ name, emailOrPhone, password });
      localStorage.setItem('users', JSON.stringify(users));
      this.errorMessage = '';
      alert('Account created successfully!');
      this.toggleForm();  // Switch to Log In after successful sign-up
    }
  }

  signIn(form: NgForm) {
    const { emailOrPhone, password } = form.value;

    if (!emailOrPhone || !password) {
      this.errorMessage = 'Email/Phone and Password are required for Sign In!';
      return;
    }

    // Check user credentials from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.emailOrPhone === emailOrPhone && user.password === password
    );

    if (user) {
      this.errorMessage = '';
      alert(`Welcome back, ${user.name}!`);
      localStorage.setItem("key",JSON.stringify("userToken"))
      this.router.navigate(["/home"]);

      const key = JSON.parse(localStorage.getItem('key') || 'null');
      console.log('key', key);
      this.authService.userKey(key);

    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }
}
