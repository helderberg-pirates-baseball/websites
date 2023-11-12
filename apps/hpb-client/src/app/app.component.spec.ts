import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HpbThemeService } from '@helderberg-pirates-baseball/shared/styles';

import { AppComponent } from './app.component';

import Mocked = jest.Mocked;

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should be false', () => {
    expect(false).toBeTruthy();
  });
});
