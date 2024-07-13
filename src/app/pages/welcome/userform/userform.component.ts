import { Component, inject } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.scss'
})
export class UserformComponent {
  form: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      username: [''],
      passwotd: ['']
    })
  }
}
