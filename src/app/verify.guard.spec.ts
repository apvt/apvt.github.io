import { TestBed } from '@angular/core/testing';

import { VerifyGuard } from './product/verify.guard';

describe('VerifyGuard', () => {
  let guard: VerifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
