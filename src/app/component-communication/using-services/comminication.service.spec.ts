import { TestBed } from '@angular/core/testing';

import { ComminicationService } from './comminication.service';

describe('ComminicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComminicationService = TestBed.get(ComminicationService);
    expect(service).toBeTruthy();
  });
});
