import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { GetUserDataService } from './get-user-data.service';

describe('GetUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ HttpClient ]
  }));

  it('should be created', () => {
    const service: GetUserDataService = TestBed.get(GetUserDataService);
    expect(service).toBeTruthy();
  });

  it ('should get users', async(() => {
    const service: GetUserDataService = TestBed.get(GetUserDataService);
    service.details("gisellem22").subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
  it ('should get repositories', async(() => {
    const service: GetUserDataService = TestBed.get(GetUserDataService);
    service.repositories("gisellem22").subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});
