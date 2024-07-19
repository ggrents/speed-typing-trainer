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
  // private _stateService = inject(StateService);
  displayedText: string = ''; //ngModel
  textToDisplay: string[]; //array of all Words
  private timer: any;
  private currentWordIndex: number = 0;

  constructor(private _stateService: StateService) {
    this.textToDisplay = texts[0].toLowerCase().split(' ');
  }

  ngOnInit(): void {
    this._stateService.trialProgress$.subscribe((_) => {
      if (_) this.startDisplayingText();
    });
  }

  startDisplayingText() {
    this.timer = interval(1000).subscribe(() => {
      this.displayedText += this.textToDisplay[this.currentWordIndex];
      console.log(this.displayedText);
      this.currentWordIndex++;
    });
  }

  private stopDisplayingText() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
