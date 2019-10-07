import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment as env} from '../../environments/environment';
import { GitUser } from '../interface/gitUser';
import { GitHubRepo } from '../interface/gitUserRepos';


@Injectable({
  providedIn: 'root'
})
export class GithubUserApiService {
  private gitUser: GitUser;
  public $giUserSubject: Subject<GitUser> = new Subject();

  constructor(private http: HttpClient) { }

  getUserInfo(username: string): Observable<GitUser> {
    const uri = `${env.api.github.getUser}`.replace('{username}', username);
    return this.http.get<GitUser>(uri);
  }

  getUserRepos(username: string): Observable<GitHubRepo[]> {
    const uri = `${env.api.github.getUserRepos}`.replace('{username}', username);
    return this.http.get<GitHubRepo[]>(uri);
  }

  setGitUserSubject(gitUser: GitUser): void {
    this.$giUserSubject.next(gitUser);
  }
}
