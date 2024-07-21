import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../../services/state.service';
import { texts } from '../texts';
import { interval } from 'rxjs';
import { InputService } from '../../../services/input.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputComponent implements OnInit {
  displayedText: string = ''; //ngModel
  textToDisplay: string[]; //array of all Words
  private timer: any;
  private currentWordIndex: number = 0;
  private _stateService = inject(StateService);
  private _inputService = inject(InputService);

  constructor() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    this.textToDisplay = texts[randomIndex].toLowerCase().split(' ');
  }

  ngOnInit(): void {
    this._stateService.trialProgress$.subscribe((_) => {
      if (_) this.startDisplayingText();
      else {
        this.stopDisplayingText();
        this.displayedText = '';
        this.countResult();
      }
    });
  }

  startDisplayingText() {
    const words = this.textToDisplay.slice(0, 4);
    this.displayedText += words.join(' ');
    this.currentWordIndex += words.length;
    this.followUserInput();
  }

  countResult() {
    const correctWords: number =
      this.currentWordIndex - 4 > 0 ? this.currentWordIndex - 4 : 0;
    let totalChars = 0;
    this.textToDisplay.slice(0, correctWords - 1).forEach((word) => {
      totalChars += word.length;
    });
    this._inputService.userResult$.next({
      totalWords: correctWords,
      wordsPerMinute: parseFloat((correctWords / 60).toFixed(2)),
    });
  }

  followUserInput() {
    this._inputService.userInputWord$.subscribe((str) => {
      if (str === this.displayedText.split(' ')[0]) {
        this.displayedText =
          this.displayedText.split(' ').slice(1).join(' ') +
          ' ' +
          this.textToDisplay[this.currentWordIndex];
        this.currentWordIndex++;
      }
    });
  }

  private stopDisplayingText() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
