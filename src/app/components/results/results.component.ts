import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Repositories } from 'src/app/interfaces/repositories.model';
import { Users } from 'src/app/interfaces/users.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private gitHubService: GithubService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.nickName = this.gitHubService.getNickName();
    this.gitHubService.setNickName(undefined);
    this.getUserData();
  }

  nickName: string;
  user: Users;
  repos: Repositories[];
  existence: boolean;
  existenceRepos: boolean;



  getUserData() {
    if (this.nickName) {
      this.gitHubService.getUser(this.nickName).subscribe(
        res => {
          this.user = res;
          this.existence = true;
          this.gitHubService.getRepositories(this.nickName).subscribe(
            res => {
              if (res.length) {
                this.repos = res.sort((a,b) => {return b.stargazers_count - a.stargazers_count});
                this.existenceRepos = true;
              } else {
                this.existenceRepos = false
              }
            },
            error => {
              this.existenceRepos = false;
            }
          )
        },
        error => {
          this.existence = false;
        }
      )
    }
  }

  newNickName() {
    this.existence = undefined;
    this.existenceRepos = undefined
    this.getUserData();
    this.changeDetector.detectChanges;
  }
}
