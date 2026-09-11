import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';

describe('App', () => {
  beforeEach(() => {

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // pour la compatibilité ancienne
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize isMobile signal to false', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.isMobile()).toBe(false);
  });

  it('should render desktop navbar by default and mobile navbar when isMobile is true', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    // Par défaut, isMobile() est false -> Desktop présent, Mobile absent
    expect(compiled.querySelector('star-desktop')).not.toBeNull();
    expect(compiled.querySelector('star-mobile')).toBeNull();

    // Passage du signal à true
    app.isMobile.set(true);
    fixture.detectChanges();

    // Mobile présent, Desktop absent
    expect(compiled.querySelector('star-mobile')).not.toBeNull();
    expect(compiled.querySelector('star-desktop')).toBeNull();
  });
});
