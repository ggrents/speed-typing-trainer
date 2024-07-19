import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyboardService } from '../../../services/keyboard.service';
//
@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent implements OnInit {
  userInput: string;
  constructor(private _keyboardService: KeyboardService) {}
  ngOnInit(): void {}
  onUserInputChange(event: string) {
    this._keyboardService.buttonClick$.next(event.slice(-1));
  }
}
