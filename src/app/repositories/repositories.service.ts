import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserProfile, Repository } from './repositories.model';
import { resolveRendererType2 } from '@angular/core/src/view/util';

@Injectable()
export class RepositoriesService {
  private apiUserBaseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUserProfile(userName: string): Observable<UserProfile> {
    return this.http.get<any>(`${this.apiUserBaseUrl}/${userName}`).pipe(
      map(result => ({
        name: result.name,
        userName: result.login,
        email: result.email,
        avatarUrl: result.avatar_url,
        bio: result.bio,
        followers: result.followers,
        url: result.html_url
      }))
    );
  }

  getUserRepositories(userName: string): Observable<Repository[]> {
    return this.http.get<any[]>(`${this.apiUserBaseUrl}/${userName}/repos`).pipe(
      map(result => result.map(repo => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url
      })).sort(this.compareRepositoryByStars.bind(this)))
    );
  }

  private compareRepositoryByStars(repo1: Repository, repo2: Repository): number {
    if (repo1.stars > repo2.stars) {
      return -1;
    }
    if (repo2.stars < repo1.stars) {
      return 1;
    }

    return 0;
  }
}
