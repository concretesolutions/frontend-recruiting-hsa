import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/user-details.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private details: BehaviorSubject<UserDetails> = new BehaviorSubject<UserDetails>(null);
  private repositories: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  getDetailsUser(user: string): Observable<any> {
    return this.http.get<UserDetails>(environment.ENDPOINT_GH + user);
    // const Req = {
    //   login: 'germanovhell',
    //   id: 15658435,
    //   node_id: 'MDQ6VXNlcjE1NjU4NDM1',
    //   avatar_url: 'https://avatars1.githubusercontent.com/u/15658435?v=4',
    //   gravatar_id: '',
    //   url: 'https://api.github.com/users/germanovhell',
    //   html_url: 'https://github.com/germanovhell',
    //   followers_url: 'https://api.github.com/users/germanovhell/followers',
    //   following_url: 'https://api.github.com/users/germanovhell/following{/other_user}',
    //   gists_url: 'https://api.github.com/users/germanovhell/gists{/gist_id}',
    //   starred_url: 'https://api.github.com/users/germanovhell/starred{/owner}{/repo}',
    //   subscriptions_url: 'https://api.github.com/users/germanovhell/subscriptions',
    //   organizations_url: 'https://api.github.com/users/germanovhell/orgs',
    //   repos_url: 'https://api.github.com/users/germanovhell/repos',
    //   events_url: 'https://api.github.com/users/germanovhell/events{/privacy}',
    //   received_events_url: 'https://api.github.com/users/germanovhell/received_events',
    //   type: 'User',
    //   site_admin: false,
    //   name: 'Germán Maluenda Alfaro',
    //   company: null,
    //   blog: '',
    //   location: 'Coquimbo',
    //   email: null,
    //   hireable: true,
    //   bio: 'Ingeniero en Computación, Universidad de La Serena.\r\n',
    //   public_repos: 12,
    //   public_gists: 0,
    //   followers: 0,
    //   following: 0,ºº
    //   created_at: '2015-11-04T19:20:35Z',
    //   updated_at: '2019-10-01T04:31:59Z'
    // };
    // return of(Req);
  }

  setDetailsUser(userDetails: UserDetails) {
    this.details.next(userDetails);
  }

  setRepositoriesUser(res: any) {
    this.repositories.next(res);
  }

  getDataUser() {
    return this.details;
  }

  getRepositories(user: string): Observable<any> {
  return this.http.get<any>(environment.ENDPOINT_GH + user + '/repos');
  }

  getRepositoriesUser() {
    return this.repositories;
  }
}
