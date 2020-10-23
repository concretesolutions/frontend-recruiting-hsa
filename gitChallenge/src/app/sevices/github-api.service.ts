import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private urlbase: string = "https://api.github.com/users/";
  private repodetail: string = "/repos";

  constructor(private _http: HttpClient) { }

  public Searchuser(username: string): Observable<any>{

    return this._http.get<any>(this.urlbase + username);
  }

  public Searchrepo(username: string): Observable<any>{

    return this._http.get<any>(this.urlbase + username + this.repodetail);
  }
}
