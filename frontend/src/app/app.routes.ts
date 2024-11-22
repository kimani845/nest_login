import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Add other routes here
];

// @NgModule({
//     declarations: [LoginComponent, SignupComponent],
//     imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
//     exports: [RouterModule],
// })
export class AppRoutingModule {}
