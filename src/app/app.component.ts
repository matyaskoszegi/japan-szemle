import { Component } from '@angular/core';
import { AuthService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Japán-Szemle';

  constructor( public auth: AuthService) { 
    
  }
}
