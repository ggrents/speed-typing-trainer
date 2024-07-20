import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  inputButtonClick$: Subject<string> = new Subject<string>();
  keyboardButtonClick$: Subject<string> = new Subject<string>();
  constructor() {}
}
