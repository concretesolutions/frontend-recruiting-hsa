import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GitUser } from '../../interface/gitUser';
import { GitHubRepo } from '../../interface/gitUserRepos';
import { GithubUserApiService } from '../../services/github-user-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  searchInp = '';

  // gitUser: GitUser;
  // userGitHubRepo: Observable<GitHubRepo[]>;

  constructor(
    private router: Router,
    private githubUserApiService: GithubUserApiService
  ) { }

  ngOnInit() {
  }

  searchGitUser(username: string = '', event: any): void {
    const queryString: string = username !== '' ? username : this.searchInp;
    this.getGitUser(queryString);
    this.router.navigate(['/detail']);
  }

  getGitUser(queryString: string): void {
    this.githubUserApiService.getUserInfo(queryString).subscribe(
      rsp => {
        console.log('Pase por el ok del gituser');
        this.githubUserApiService.setGitUserSubject(rsp);
      },
      err => {
        console.log(err);
        if (err.status === 404) {
          this.router.navigate(['/not-found']);
        }
      }
    );
  }

}
