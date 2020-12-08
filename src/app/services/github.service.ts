import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositories } from '../interfaces/repositories.model';
import { Users } from '../interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }
  url = 'https://api.github.com/users/'
  nickName: string
  getNickName() { return this.nickName }
  setNickName(nickName: string) { this.nickName = nickName }


  getUser(username: string): Observable<Users> {
    return this.http.get<Users>(`${this.url}${username}`)
  }


  getRepositories(username: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(`${this.url}${username}/repos`)
  }
}


