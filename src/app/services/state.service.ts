import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private trialProgressSubject$: Subject<boolean> = new Subject<boolean>();
  trialProgress$: Observable<boolean> =
    this.trialProgressSubject$.asObservable();

  constructor() {}

  updateTrialProgress(value: boolean) {
    this.trialProgressSubject$.next(value);
  }
}
