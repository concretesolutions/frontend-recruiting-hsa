import { TestBed } from '@angular/core/testing';

import { GithubUserApiService } from './github-user-api.service';

describe('GithubUserApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubUserApiService = TestBed.get(GithubUserApiService);
    expect(service).toBeTruthy();
  });
});
