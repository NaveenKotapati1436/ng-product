import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface LoginResponse {
  success: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  // BehaviorSubject to track the authentication status
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());

  // Observable for other components to subscribe to the authentication status
  authStatus = this.loggedIn.asObservable();

  constructor(private router: Router) {}

  // Simulate login with mock data
  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('authToken', 'mock-token');
      this.loggedIn.next(true);  // Emit login success
      return of(true);
    } else {
      return of(false);
    }
  }

  // Simulate user signup
  signup(username: string, password: string): Observable<boolean> {
    const userExists = this.users.find(user => user.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      return of(true);
    } else {
      return of(false);
    }
  }

  // Logout and clear the token
  logout() {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);  // Emit logout status
    this.router.navigate(['/login']);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}