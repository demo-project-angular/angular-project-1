import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layouts/mainLayoutsComponents';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DemoProject');
}
