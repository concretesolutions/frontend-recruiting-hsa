import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private user:string;
  private UrlUser = "https://api.github.com/users/"; // URL to web api
  private urlRepos = "https://api.github.com/users/"+this.user+"/repos"
  
  constructor(private http: HttpClient) { }

  public obtenerUsuario(usuario): Observable<any> {
    this.user = usuario
    return this.http.get<any>(this.UrlUser+this.user);
  }

  public obtenerRepos(usuario): Observable<any> {
    this.user = usuario
    this.urlRepos = "https://api.github.com/users/"+this.user+"/repos"
    return this.http.get<any>(this.urlRepos);
  }
}


