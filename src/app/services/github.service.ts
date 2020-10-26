import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private urlBase = environment.urlServicios;

  constructor(private http: HttpClient) { }
  // getUser(name: string): Observable<User> {
  //   const url = `https://api.github.com/users/${name}`;
    // const url = this.urlBase + "/users/${name}";
    // return this.http.get<User>(url);
  // }   

  // getRepoUser(name: string): Observable<User> {
    // const url = `https://api.github.com/users/${name}/repos`;
    // const url = this.urlBase + "/users/${name}/repos";
    // return this.http.get<User>(url);
  // }
}
