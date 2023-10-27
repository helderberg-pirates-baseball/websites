import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFeaturesHomeComponent } from './lazy-features-home.component';

describe('LazyFeaturesHomeComponent', () => {
  let component: LazyFeaturesHomeComponent;
  let fixture: ComponentFixture<LazyFeaturesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyFeaturesHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyFeaturesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
