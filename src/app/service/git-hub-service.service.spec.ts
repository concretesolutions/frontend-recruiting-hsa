import { TestBed } from '@angular/core/testing';

import { GitHubServiceService } from './git-hub-service.service';

describe('GitHubServiceService', () => {
  let service: GitHubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
