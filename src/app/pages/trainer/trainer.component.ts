import { Component } from '@angular/core';
import { TextComponent } from "./text/text.component";
import { InputComponent } from "./input/input.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [TextComponent, InputComponent, KeyboardComponent],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {

}
