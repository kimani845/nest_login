import { Component } from '@angular/core';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { AuthService } from '../auth.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-signup',
  standalone: true,
  // imports: [ FormsModule, CommonModule, HttpClientXsrfModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule], 

})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private authservice: AuthService) {}

  onSubmit(): void {
    // Ensure all fields are filled in
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      console.error('All fields are required');
      return;
    }

    // Ensure passwords match
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    // If validation passes, proceed with signup
    console.log('Signup data:', {
      name: this.name,
      email: this.email,
      password: this.password,
    });

    // Prepare user data for the signup API call
    const userData = { name: this.name, email: this.email, password: this.password };

    // Call the signup API through the AuthService
    this.authservice.signup(userData).subscribe(
      (response) => {
        console.log('Signup Successful:', response);
      },
      (error) => {
        console.error('Signup failed', error);
      }
    );
  }

  }

