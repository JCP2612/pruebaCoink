import { TestBed } from '@angular/core/testing';

import { GetPayloadService } from './get-payload.service';

describe('GetPayloadService', () => {
  let service: GetPayloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPayloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
