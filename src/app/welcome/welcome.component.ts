import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
