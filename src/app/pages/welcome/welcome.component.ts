import { Component } from '@angular/core';
import { HeaderComponent } from "../layout/header/header.component";
import { UserformComponent } from "./userform/userform.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeaderComponent, UserformComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
