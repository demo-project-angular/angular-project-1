import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthStore } from './auth.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  loginForm: FormGroup;
  authStore = inject(AuthStore); // inject store

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { userName, password } = this.loginForm.value;
    this.authStore.login(userName, password); // call store login
  }
}
