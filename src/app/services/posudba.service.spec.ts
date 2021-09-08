import { TestBed } from '@angular/core/testing';

import { PosudbaService } from './posudba.service';

describe('PosudbaService', () => {
  let service: PosudbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosudbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
