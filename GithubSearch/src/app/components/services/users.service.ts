import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  searchUsers(value: string) {
    return this.http.get(`${environment.baseUrlAPI}/${value}`);
  }

  searchRepoUsers(value: string) {
    return this.http.get(`${environment.baseUrlAPI}/${value}/repos`);
  }
}
