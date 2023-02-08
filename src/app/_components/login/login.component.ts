import { Component } from '@angular/core';
import { AuthService } from '@app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username!: string;
  password!: string;
  loggedIn: any;
  
  constructor(public auth: AuthService){ }

  login() {
    if (this.username === 'matyas' && this.password === 'Zsolnaynegyed12') {
      this.auth.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
    }
  }
}
