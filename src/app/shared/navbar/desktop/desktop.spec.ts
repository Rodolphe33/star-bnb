import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Desktop } from './desktop';

describe('Desktop', () => {
  let component: Desktop;
  let fixture: ComponentFixture<Desktop>;

  beforeEach(async () => {

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

    await TestBed.configureTestingModule({
      imports: [Desktop],
    }).compileComponents();

    fixture = TestBed.createComponent(Desktop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
