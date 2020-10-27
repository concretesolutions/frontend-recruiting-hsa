import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo, User } from './types';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private readonly http: HttpClient) {}

  getUser(username: string) {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get<User>(url);
  }

  getRepos(username: string) {
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http
      .get<Repo[]>(url)
      .pipe(
        map((repos) =>
          [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)
        )
      );
  }

  getInfo(username: string) {
    return combineLatest([
      this.getUser(username),
      this.getRepos(username),
    ]).pipe(map(([user, repos]) => ({ user, repos })));
  }
}
