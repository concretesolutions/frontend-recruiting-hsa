import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GitHubServiceService {
	constructor(private http: HttpClient) {}

	private gitHubUserUrl = `https://api.github.com/users/`;

	getUsers(username: any): Observable<any[]> {
		return this.http.get<any[]>(`${this.gitHubUserUrl}${username}`);
	}

	getRepos(username: any): Observable<any[]> {
		return this.http.get<any[]>(`${this.gitHubUserUrl}${username}/repos`);
	}
}
