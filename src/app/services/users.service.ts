import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Repo } from '../models/repo.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<User> {
    return (
      this.http.get(environment.apiUrl + username, {})
      .pipe(map((user: User) => {
        return user;
      }))
    );
  }
  getRepos(username: string): Observable<Repo> {
    return (
      this.http.get(environment.apiUrl + username + '/repos', {})
      .pipe(map((repo: Repo) => {
        return repo;
      }))
    );
  }
}