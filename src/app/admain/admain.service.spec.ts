import { TestBed } from '@angular/core/testing';

import { AdmainService } from './admain.service';

describe('AdmainService', () => {
  let service: AdmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
