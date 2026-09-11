import { Component, signal } from '@angular/core';
import { Mobile } from './shared/navbar/mobile/mobile';
import { Desktop } from './shared/navbar/desktop/desktop';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [Mobile, Desktop, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('star-bnb');

  isMobile = signal(false);
}
