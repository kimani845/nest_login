import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      console.error('All fields are required');
      return;
    }
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    console.log('Signup data:', {
      name: this.name,
      email: this.email,
      password: this.password,
    });
    // Add your signup logic here
  }
}

