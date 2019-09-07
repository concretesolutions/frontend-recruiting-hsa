import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitUserService {

  private readonly endPoint: string;

  user: string;

  constructor(private httpClient: HttpClient) {
    this.endPoint = 'https://api.github.com/users/';
    this.user = '';
  }

  GetUserInput(user: string) {
    this.user = user;
  }

  getUser() {
    const url = this.endPoint + this.user;
    return this.httpClient.get(url);
  }

  getUserRepo() {
    const url = this.endPoint + this.user + '/repos';
    console.log(url);
    return this.httpClient.get(url);
  }
}
