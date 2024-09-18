import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}