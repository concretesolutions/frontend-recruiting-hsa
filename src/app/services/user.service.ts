import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReposInterface, UserDataInterface } from '../domain/user';

@Injectable()
export class UserService {
  private readonly URL_API = 'https://api.github.com/users/';

  constructor(private readonly httpClient: HttpClient) {}

  getDataUser(user: string): Observable<UserDataInterface> {
    return this.httpClient.get<UserDataInterface>(this.URL_API + user);
  }
  getReposUser(user: string): Observable<[ReposInterface]> {
    return this.httpClient.get<[ReposInterface]>(
      this.URL_API + `${user}/repos`
    );
  }
}
