import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  buttonClick$: Subject<string> = new Subject<string>();
  constructor() {}
}
