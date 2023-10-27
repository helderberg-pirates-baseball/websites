import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLandingComponent } from './pages-landing.component';

describe('PagesLandingComponent', () => {
  let component: PagesLandingComponent;
  let fixture: ComponentFixture<PagesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
