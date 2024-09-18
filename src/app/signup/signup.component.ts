import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  signupFailed: boolean = false;
  signupSuccess: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.username, this.password).subscribe(success => {
      if (success) {
        this.signupSuccess = true;  // Display success message
        this.signupFailed = false;
        setTimeout(() => {
          this.router.navigate(['/login']);  // Redirect to login after success
        }, 2000);
      } else {
        this.signupFailed = true;  // Display error message if user exists
        this.signupSuccess = false;
      }
    });
  }
}