import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private _fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this._fb.group({
      theme: [null, Validators.required],
      fontSize: [''],
      timer: ['', Validators.required],
    });
  }
}
