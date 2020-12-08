import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { UserDetailService } from './user-detail.service';

describe('UserDetailService', () => {
  let service: UserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(UserDetailService);
  });

  it('should be created', () => {
    const service: UserDetailService = TestBed.get(UserDetailService);
    expect(service).toBeTruthy();
  });
  it ('should get users info', (() => {
    const service: UserDetailService = TestBed.get(UserDetailService);
    service.getUserInfo("luiscruzga")
    service.userInfo.subscribe(
      (info) => expect(info).not.toBeNull(),
      (error) => fail(error)
    );
  }));
  it ('dont should get user info because dont exist', (() => {
    const service: UserDetailService = TestBed.get(UserDetailService);
    service.getUserInfo("luiscruzga123")
    service.userInfo.subscribe(
      (info) => expect(info).toBeNull(),
      (error) => fail(error)
    );
  }));
  it ('should get users repositoriesshould get an empty repository array from a user with no repos', (() => {
    const service: UserDetailService = TestBed.get(UserDetailService);
    service.getUserInfo("lcorvalan")
    service.reposUser.subscribe(
      (repos) => expect(repos.length).toBeLessThanOrEqual(0),
      (error) => fail(error)
    );
  }));
});
