import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HpbThemeService } from '@helderberg-pirates-baseball/shared/styles';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let hpbThemeSpy: jest.Mocked<HpbThemeService>;

  beforeEach(async () => {
    hpbThemeSpy = {
      init: jest.fn(() => 'dark'),
    } as unknown as jest.Mocked<HpbThemeService>;

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        // keep split
        { provide: HpbThemeService, useValue: hpbThemeSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
