import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ReposInterface, UserDataInterface } from '../../../domain/user';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent implements OnInit {
  public user: string;
  public userData: UserDataInterface | undefined;
  public userRepos: ReposInterface[];
  public stars = 0;
  public loading = true;
  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user = params.user;
      this.getUser();
    });
  }
  public getUser = () => {
    this.service.getDataUser(this.user).subscribe(
      (user: UserDataInterface) => {
        this.loading = false;
        this.userData = user;
        this.service
          .getReposUser(this.user)
          .subscribe((repos: ReposInterface[]) => {
            this.userRepos = repos.sort((a, b) =>
              a.stargazers_count < b.stargazers_count ? 1 : -1
            );
            this.userRepos.map((repo: ReposInterface) => {
              this.stars += repo.stargazers_count;
            });
          });
      },
      () => {
        this.userData = undefined;
        this.loading = false;
      }
    );
  };
}
