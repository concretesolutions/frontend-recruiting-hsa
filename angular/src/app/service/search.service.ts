import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { DetailsModel } from '../model/details.model';
import { RepositoryModel } from '../model/repository.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url: string;

  constructor(private http: HttpClient,
                    private errorHandlerService: ErrorHandlerService) {

    this.url = `https://api.github.com/`;
  }

  /**
   * Get details user by username
   *
   * @param  {string} username
   * @returns Observable
   */
  getDetailsUser(username: string): Observable<DetailsModel> {

    return this.http.get<DetailsModel>(`${this.url}users/${username}`)
        .pipe(
            catchError(this.errorHandlerService.handleError<DetailsModel>('getDetailsUser'))
        );
  }

  /**
   * Get repository user by username
   *
   * @param  {string} username
   * @returns Observable
   */
  getRepoUser(username: string): Observable<RepositoryModel[]> {

    return this.http.get<RepositoryModel[]>(`${this.url}users/${username}/repos`)
        .pipe(
            catchError(this.errorHandlerService.handleError<RepositoryModel[]>('getRepoUser'))
        );
  }
}
