import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor (
      private authservice: AuthService,
      private router: Router 
    ){}

  onSubmit(): void {

    const credentials = {
      email: this.email, 
      password: this.password , 
      rememberMe: this.rememberMe
    };
    this.authservice.login(credentials).subscribe({
      next: (response) => {
        console.log("Login Successful:", response);
        this.router.navigate(['/home']); //optionally navigate to homepage
      },
      
      error: (error) => {
        console.error("Login failed:", error);
      }

  });
  }
}