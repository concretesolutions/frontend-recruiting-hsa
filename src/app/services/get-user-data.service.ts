import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Details } from '../models/Details';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  url: string = "https://api.github.com/users/"
  
  user: any;
  public getUserSubject = new Subject<any>();
  public getUserObservable = this.getUserSubject.asObservable();

  repos: [];
  public getReposSubject = new Subject<[]>();
  public getReposObservable = this.getReposSubject.asObservable();

  constructor(private http: HttpClient) { }

  details(username: string): Observable<any> {
    return this.http.get<any>(this.url + username)
  }
  repositories(username: string): Observable<any> {
    return this.http.get<any>(this.url + username + "/repos")
  }
  getDetails(user: Details) {
    this.user = user;
    this.getUserSubject.next(user);
  }
  getRepos(repos: any) {
    this.repos = repos;
    this.getReposSubject.next(repos);
  }
}
