import { Component, OnInit, OnChanges } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details.model';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public userDetails: UserDetails;
  public userRepositories = [];
  public withoutDescription = 'Without Description';

  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {
    this.chargeDataUser();
  }

  chargeDataUser(): void {
    this.githubSearchService.detailsObservable.subscribe( res => {
      this.userDetails = res;
    });
    this.githubSearchService.repositoriesObservable.subscribe( res => {
      if (res && res.length > 0) {
        this.userRepositories = res;
      }
    });
  }

}
