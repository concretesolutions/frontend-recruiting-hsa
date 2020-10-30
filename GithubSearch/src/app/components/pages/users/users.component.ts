import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: any = [];
  repoUser: any = [];
  repoUser2: any = [];
  start: number = 0;
  repos: number = 0;
  varError: boolean = false;

  constructor(private UsersService: UsersService,
    private activateRouter: ActivatedRoute,
    private router: Router) {
    this.onUrlChange();
  }

  ngOnInit(): void {
   // this.getDataFromService();
  }

  private getDataFromService() {
    const params = this.activateRouter.snapshot.params;
    this.start = 0;
    this.repos = 0;
    if (params.id) {
      this.UsersService.searchUsers(params.id)
        .subscribe(
          res => {
            //console.log(res);
            this.user = res;
            

          },
          err => console.log(err)
        )
    }
    this.UsersService.searchRepoUsers(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.repoUser2 = res;
          this.repoUser = this.repoUser2.sort((a, b) => b.stargazers_count - a.stargazers_count);
          this.sumValues();
          this.varError = false
          

        },
        err => {console.log(err);
        this.varError = true}
      )
  }

  private onUrlChange() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        () => {
          this.getDataFromService();
        }
      )
  }

  sumValues(){
  this.repoUser.forEach(element => {
    this.start += element.stargazers_count;
    this.repos += 1
    //console.log(this.start)
    //console.log(element.stargazers_count)
  });
  }

}
