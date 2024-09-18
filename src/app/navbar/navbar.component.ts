import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the authStatus observable to track login state
    this.authService.authStatus.subscribe(status => {
      this.isLoggedIn = status;  
    });
  }

  logout() {
    this.authService.logout();
  }
}