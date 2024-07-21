import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.scss',
})
export class UserformComponent implements OnInit {
  isLogin: boolean = false;
  form: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      username: [''],
      passwotd: [''],
    });
  }
  ngOnInit(): void {
    this.isLogin = true;
  }

  switchFormMode(event: any) {
    event.preventDefault();
    this.isLogin = !this.isLogin;
  }
}
