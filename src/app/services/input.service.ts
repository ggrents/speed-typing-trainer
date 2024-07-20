import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IResult } from '../models/result.interface';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  userInputWord$: Subject<string> = new Subject<string>();
  userResult$: Subject<IResult> = new Subject<IResult>();
  constructor() {}
}
