import { TestBed } from '@angular/core/testing';

import { LibStartService } from './lib-start.service';

describe('LibStartService', () => {
  let service: LibStartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibStartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
