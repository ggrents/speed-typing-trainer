import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
  OnInit,
} from '@angular/core';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { StateService } from '../../../services/state.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit {
  totalSeconds = 60;
  timerSubscription$!: Subscription;
  isTimerStart: boolean = false;
  hideStartButton: boolean = false;
  activeRoute: number;

  private _cdr = inject(ChangeDetectorRef);
  private _stateService = inject(StateService);
  private _route = inject(Router);
  constructor() {}

  ngOnInit(): void {
    this._route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/trainer':
            this.activeRoute = 1;
            break;
          case '/results':
            this.activeRoute = 2;
            break;
          case '/custom':
            this.activeRoute = 3;
            break;
          case '/settings':
            this.activeRoute = 4;
            break;
          case '/':
            this.activeRoute = 5;
            break;
          default:
            this.activeRoute = 1;
            break;
        }
      }
    });
  }

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
        this.totalSeconds = 60;
        this.timerSubscription$.unsubscribe();
      }
    });
  }

  onSave() {}
  ngOnDestroy(): void {
    if (this.timerSubscription$) {
      this.timerSubscription$.unsubscribe();
    }
  }
}
