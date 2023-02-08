import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() {
    if (localStorage.getItem('loggedIn')) {
      this.loggedIn = true;
    }
  }
  
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }
}