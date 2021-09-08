import { TestBed } from '@angular/core/testing';

import { PosudbaResolverService } from './posudba-resolver.service';

describe('PosudbaService', () => {
  let service: PosudbaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosudbaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
