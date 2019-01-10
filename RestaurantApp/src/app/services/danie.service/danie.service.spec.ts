import { TestBed } from '@angular/core/testing';

import { DanieService } from './danie.service';

describe('DanieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanieService = TestBed.get(DanieService);
    expect(service).toBeTruthy();
  });
});
