import { TestBed } from '@angular/core/testing';

import { Division2TestService } from './division2-test.service';

describe('Division2TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Division2TestService = TestBed.get(Division2TestService);
    expect(service).toBeTruthy();
  });
});
