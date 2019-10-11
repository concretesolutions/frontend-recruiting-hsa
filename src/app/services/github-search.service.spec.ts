import { TestBed, async } from '@angular/core/testing';

import { GithubSearchService } from './github-search.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('GithubSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ HttpClient ]
  }));

  it('should be created', () => {
    const service: GithubSearchService = TestBed.get(GithubSearchService);
    expect(service).toBeTruthy();
  });
  it ('should getDetailsUser', async(() => {
    const service: GithubSearchService = TestBed.get(GithubSearchService);
    service.getDetailsUser('germanovhell').subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
  it ('should getRepositories', async(() => {
    const service: GithubSearchService = TestBed.get(GithubSearchService);
    service.getRepositories('germanovhell').subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});
