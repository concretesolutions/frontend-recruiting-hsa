import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GitHubService {
	constructor(private http: HttpClient) {}

	url = 'https://api.github.com/users/';

	getData(username: string, path: string): Observable<any> {
		return this.http.get<any>(`${this.url}${username}${path}`);
	}
}
