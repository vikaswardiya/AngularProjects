import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateguardGuard } from './activateguard.guard';

describe('ActivateguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateguardGuard]
    });
  });

  it('should ...', inject([ActivateguardGuard], (guard: ActivateguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
