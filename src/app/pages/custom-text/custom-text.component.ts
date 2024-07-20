import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-text.component.html',
  styleUrl: './custom-text.component.scss',
})
export class CustomTextComponent {
  private _fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this._fb.group({
      name: ['', Validators.required],
      description: [''],
      text: ['', Validators.required],
    });
  }

  onSubmit() {}
}
