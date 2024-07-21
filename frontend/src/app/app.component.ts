import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { TrainerComponent } from './pages/trainer/trainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, TrainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'speed-typing-trainer';
}
