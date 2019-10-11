import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/user-details.model';
import { environment } from 'src/environments/environment';
import { UserRepo } from '../models/user-repos.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  public details = new BehaviorSubject<UserDetails>(null);
  public detailsObservable = this.details.asObservable();
  public repositories = new BehaviorSubject<UserRepo[]>(null);
  public repositoriesObservable = this.repositories.asObservable();

  constructor(private http: HttpClient) { }

  getDetailsUser(user: string): Observable<any> {
    return this.http.get<UserDetails>(environment.ENDPOINT_GH + user);
  }

  setDetailsUser(userDetails: UserDetails) {
    this.details.next(userDetails);
  }

  setRepositoriesUser(res: UserRepo[]) {
    this.repositories.next(res);
  }

  getRepositories(user: string): Observable<any> {
  return this.http.get<UserRepo>(environment.ENDPOINT_GH + user + '/repos');
  }

}
