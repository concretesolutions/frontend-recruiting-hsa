import { TestBed } from '@angular/core/testing';

import { GitUserService } from './git-user.service';

describe('GitUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitUserService = TestBed.get(GitUserService);
    expect(service).toBeTruthy();
  });
});
