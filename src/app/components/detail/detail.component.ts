import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserDetailService } from '@services/user-detail/user-detail.service';
import { UserDetail } from '@models/userDetail';
import { Repositorie } from '@models/repositories';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userInfo: UserDetail;
  reposUser: Repositorie[];
  totalStarts: number = 0;
  username: string = '';
  notExistsRepos: string = '';

  constructor(
    private route: ActivatedRoute,
    private userDetailService: UserDetailService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.username = params.username;
        if (this.username !== '') {
          // Reset counter
          this.totalStarts = 0;
          // Get user info
          this.userDetailService.userInfo.subscribe(res => {
            this.userInfo = res;
          });
          // Get user repos
          this.userDetailService.reposUser.subscribe(res => {
            this.reposUser = res;
            if (this.reposUser.length > 0) {
              // We add the number of stars in your repos
              this.totalStarts = this.reposUser.reduce((a,b) => a + b.stargazers_count, 0);
              this.notExistsRepos = '';
            } else {
              this.notExistsRepos = 'No repositories found';
            }
          });
          // We trigger the search for information
          this.userDetailService.getUserInfo(this.username);
        }
      }
    );
  }
}
