import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HpbThemeService } from '@helderberg-pirates-baseball/shared/styles';

import { AppComponent } from './app.component';

import Mocked = jest.Mocked;

describe('AppComponent', () => {
  let hpbThemeSpy: Mocked<HpbThemeService>;

  beforeEach(async () => {
    hpbThemeSpy = {
      init: jest.fn(() => 'dark'),
    } as unknown as Mocked<HpbThemeService>;
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      providers: [
        // keep split
        { provide: HpbThemeService, useValue: hpbThemeSpy },
      ],
    }).compileComponents();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
