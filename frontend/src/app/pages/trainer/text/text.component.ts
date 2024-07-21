import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyboardService } from '../../../services/keyboard.service';
import { InputService } from '../../../services/input.service';
import { StateService } from '../../../services/state.service';
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
  inputDisabled: boolean = true;
  placeholderText = 'НАЖМИТЕ КНОПКУ ЧТОБЫ НАЧАТЬ';
  private _keyboardService = inject(KeyboardService);
  private _inputService = inject(InputService);
  private _stateService = inject(StateService);

  constructor() {}

  ngOnInit(): void {
    this._stateService.trialProgress$.subscribe((_) => {
      this.inputDisabled = !_;
      this.placeholderText = !_
        ? 'НАЖМИТЕ КНОПКУ ЧТОБЫ НАЧАТЬ'
        : 'ВВОДИТЕ ТЕКСТ';
      if (!_) {
        this.userInput = '';
      }
    });
    this._keyboardService.keyboardButtonClick$.subscribe((_) => {
      if (_ && _ !== undefined) this.userInput += _;
    });
  }

  onUserInputChange(event: string) {
    const inputSymbol = event.slice(-1);
    this._keyboardService.inputButtonClick$.next(inputSymbol);
    if (inputSymbol == ' ') {
      this._inputService.userInputWord$.next(
        this.userInput.trim().split(' ').pop()
      );
      if (this.userInput.length > 120) this.userInput = '';
    }
  }
}
