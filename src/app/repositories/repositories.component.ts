import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubUserDetails, UserProfile, Repository } from './repositories.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  private subscribtion: Subscription;
  private userDetails: GithubUserDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribtion = this.route.data.subscribe(({ userDetails }) => this.userDetails = userDetails);
  }

  get userProfile(): UserProfile {
    return this.userDetails && this.userDetails.profile;
  }

  get repositories(): Repository[] {
    return this.userDetails && this.userDetails.repositories;
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }


}
