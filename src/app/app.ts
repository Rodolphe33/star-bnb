import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mobile } from './shared/navbar/mobile/mobile';
import { Desktop } from './shared/navbar/desktop/desktop';

@Component({
  imports: [RouterOutlet, Mobile, Desktop],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('star-bnb');

  isMobile = signal(false);
}
