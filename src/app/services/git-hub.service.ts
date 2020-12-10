import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Repositorie } from '../models/repositorie.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://api.github.com/users'
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getUser(userNickName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/${userNickName}`, this.httpOptions)
  }

  getRepositories(userNickName: string): Observable<Repositorie[]> {
    return this.httpClient.get<Repositorie[]>(`${this.apiUrl}/${userNickName}/repos`, this.httpOptions)
  }
}
