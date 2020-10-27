import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { GithubService } from '../core/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  info$ = this.route.params.pipe(
    switchMap((params) => {
      const username = params.username;
      return this.githubSvc.getInfo(username).pipe(catchError(() => of(null)));
    })
  );

  constructor(
    private readonly githubSvc: GithubService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
