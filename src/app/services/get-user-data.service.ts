import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  url: string = "https://api.github.com/users/"


  constructor(private http: HttpClient) { }

  details(username: string): Observable<any> {
    return this.http.get<any>(this.url + username)
  }
  repositories(username: string): Observable<any> {
    return this.http.get<any>(this.url + username + "/repos")
  }

  user: any;
  public getUserSubject = new Subject<any>();
  getUserObservable = this.getUserSubject.asObservable();

  getDetails(user: any) {
    this.user = user;
    this.getUserSubject.next(user);
  }

  repos: any;
  public getReposSubject = new Subject<any>();
  getReposObservable = this.getReposSubject.asObservable();

  getRepos(repos: any) {
    this.repos = repos;
    this.getReposSubject.next(repos);
  }
}
