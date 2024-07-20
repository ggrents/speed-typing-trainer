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
  userInput: string = '';
  constructor(private _keyboardService: KeyboardService) {}
  ngOnInit(): void {
    this._keyboardService.keyboardButtonClick$.subscribe((_) => {
      console.log(_);
      if (_ && _ !== undefined) this.userInput += _;
    });
  }
  onUserInputChange(event: string) {
    this._keyboardService.inputButtonClick$.next(event.slice(-1));
  }
}
