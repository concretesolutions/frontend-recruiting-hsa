import { TestBed } from '@angular/core/testing';

import { GetUserDataService } from './get-user-data.service';

describe('GetUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserDataService = TestBed.get(GetUserDataService);
    expect(service).toBeTruthy();
  });
});
