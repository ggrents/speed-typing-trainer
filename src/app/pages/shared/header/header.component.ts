import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent {
  totalSeconds = 60;
  timerSubscription$!: Subscription;
  isTimerStart: boolean = false;
  private _cdr = inject(ChangeDetectorRef);
  private _stateService = inject(StateService);
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this._stateService.updateTrialProgress(true);
    this.isTimerStart = true;
    this.timerSubscription$ = interval(1000).subscribe(() => {
      if (this.totalSeconds > 0) {
        this.totalSeconds--;
        this._cdr.markForCheck();
      } else {
        this._stateService.updateTrialProgress(false);
        this.isTimerStart = false;
        this.timerSubscription$.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription$) {
      this.timerSubscription$.unsubscribe();
    }
  }
}
