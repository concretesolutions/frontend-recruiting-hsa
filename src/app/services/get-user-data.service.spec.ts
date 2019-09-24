import { TestBed } from '@angular/core/testing';
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
});
