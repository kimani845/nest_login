import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Add other routes here
];

@NgModule({
    declarations: [
      AppComponent, 
      // LoginComponent, // Removed declaration for standalone component
      // SignupComponent // Removed declaration for standalone component
    ],
    imports: [
        BrowserModule, 
        HttpClientModule,
        RouterModule.forRoot(routes), 
        CommonModule,
        FormsModule, 
    ],
    providers:[],
    exports: [RouterModule],
    bootstrap: [AppComponent]

})
export class AppRoutingModule {}
