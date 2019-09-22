import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {
  
url:string = "https://api.github.com/users/"


  constructor(private http: HttpClient) { }
  
  details(username:string): Observable<any> {
  return this.http.get<any>(this.url+username)
  }
  repositories(username:string): Observable<any> {
  return this.http.get<any>(this.url+username+"/repos")
  }
}
