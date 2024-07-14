import { Component } from '@angular/core';
import { UserformComponent } from "./userform/userform.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [UserformComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
