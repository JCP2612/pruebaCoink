import { TestBed } from '@angular/core/testing';

import { GetIdentificationService } from './get-identification.service';

describe('GetIdentificationService', () => {
  let service: GetIdentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIdentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
