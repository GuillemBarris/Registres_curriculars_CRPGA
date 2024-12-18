import { TestBed } from '@angular/core/testing';

import { SdaServiceService } from './sda-service.service';

describe('SdaServiceService', () => {
  let service: SdaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
