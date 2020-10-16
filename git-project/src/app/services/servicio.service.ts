import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private user:string;
  private ChuckUrl = "https://api.github.com/users/"; // URL to web api

  constructor(private http: HttpClient) { }

  public obtenerUsuario(usuario): Observable<any> {
    this.user = usuario
    return this.http.get<any>(this.ChuckUrl+this.user);
  }
}


