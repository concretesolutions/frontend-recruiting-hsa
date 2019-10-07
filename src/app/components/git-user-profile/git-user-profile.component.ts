import { Component, OnInit } from '@angular/core';
import { GithubUserApiService } from '../../services/github-user-api.service';

import { Observable } from 'rxjs';
import { GitHubRepo } from 'src/app/interface/gitUserRepos';
import { GitUser } from 'src/app/interface/gitUser';
// import { get } from 'http';

@Component({
  selector: 'app-git-user-profile',
  templateUrl: './git-user-profile.component.html',
  styleUrls: ['./git-user-profile.component.scss']
})
export class GitUserProfileComponent implements OnInit {
  user: GitUser;
  userGitHubRepo: Observable<GitHubRepo[]>;

  constructor(
    private githubUserApiService: GithubUserApiService
  ) { }

  ngOnInit() {
    this.githubUserApiService.$giUserSubject.subscribe(subject => {
      this.user = subject;
      console.log(this.user);
      if (this.user.public_repos > 0 ) {
        this.hasRepos(this.user.login);
      }
    });
  }

  hasRepos(username: string) {
    this.userGitHubRepo = this.githubUserApiService.getUserRepos(username);
  }
}
