import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { UserDetail } from '@models/userDetail';
import { Repositorie } from '@models/repositories';
/**
 * Service in charge of searching for user information and its repositories
 */
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  baseUrl: string = "https://api.github.com/users/";
  private userInfoSubject = new Subject<UserDetail>();
  private repoUserSubject = new Subject<Repositorie[]>();
  private userExistSubject = new Subject<boolean>();
  userInfo = this.userInfoSubject.asObservable();
  reposUser = this.repoUserSubject.asObservable();
  userExist = this.userExistSubject.asObservable();

  constructor(
    private http:HttpClient
  ) { }
  /**
  * @ignore
  */
  callUserInfo(username: string){
    return this.http.get<UserDetail>(`${this.baseUrl}${username}`);
  }
  /**
  * @ignore
  */
  callReposUser(username: string){
    return this.http.get<Repositorie[]>(`${this.baseUrl}${username}/repos`);
  }
  /**
  * Method that obtains the information of a specific user and their repositories if it exists, otherwise, it is indicated that the user does not exist
  * @param {string} username
  * @memberof UserDetailService
  */
  getUserInfo(username: string){
    this.callUserInfo(username)
    .subscribe(res => {
      this.userExistSubject.next(true);
      this.userInfoSubject.next(res);

      this.callReposUser(username)
      .subscribe(data => {
        // Order by update date
        let repos = data.sort((a,b) => (new Date(a.updated_at) > new Date(b.updated_at) ? -1 : 1)); 
        this.repoUserSubject.next(repos);
      })
    },
    err => {
      if (err.status == 404) {
        this.userExistSubject.next(false);
      } 
    });
  }
}
