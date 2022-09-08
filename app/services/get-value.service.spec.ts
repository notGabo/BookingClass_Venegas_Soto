import { TestBed } from '@angular/core/testing';

import { GetValueService } from './get-value.service';

describe('GetValueService', () => {
  let service: GetValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
