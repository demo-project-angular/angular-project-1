// src/app/layouts/auth-layout/auth-layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
   
    <div class="">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainLayoutComponent { }
