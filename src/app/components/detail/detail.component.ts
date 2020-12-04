import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserDetailService } from './../../services/user-detail/user-detail.service';
import { UserDetail } from './../../models/userDetail';
import { Repositorie } from './../../models/repositories';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userInfo: UserDetail;
  reposUser: Repositorie[];
  urlTest: string = "https://www.github.com";
  avatarUrl: string = "https://avatars1.githubusercontent.com/u/15023840?v=4";
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private userDetailService: UserDetailService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.username = params.username;
        if (this.username !== '') {
          this.userDetailService.userInfo.subscribe(res => {
            this.userInfo = res;
          });
    
          this.userDetailService.reposUser.subscribe(res => {
            this.reposUser = res;
          });
    
          this.userDetailService.getUserInfo(this.username);
        }
      }
    );
  }
}
