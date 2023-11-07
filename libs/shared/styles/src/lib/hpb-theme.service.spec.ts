import { TestBed } from '@angular/core/testing';

import { HpbThemeService } from './hpb-theme.service';

describe('HpbThemeService', () => {
  let service: HpbThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpbThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
