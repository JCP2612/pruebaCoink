import { TestBed } from '@angular/core/testing';

import { TargetBlanckLogService } from './target-blanck-log.service';

describe('TargetBlanckLogService', () => {
  let service: TargetBlanckLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetBlanckLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
