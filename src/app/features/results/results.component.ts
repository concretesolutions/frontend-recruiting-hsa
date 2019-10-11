import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details.model';
import { GithubSearchService } from 'src/app/services/github-search.service';
import { NO_REPOSITOIES } from 'src/app/constants/constants-util';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public userDetails: UserDetails;
  public userRepositories = [];
  public withoutDescription: string;
  public allStars: number;
  public stars: any[];
  public noRepositories: string;
  public hasRepositories: boolean;

  constructor(private githubSearchService: GithubSearchService) {
    this.userRepositories = [];
    this.userDetails = null;
    this.allStars = 0;
    this.withoutDescription = 'Without Description';
    this.stars = [];
    this.noRepositories = NO_REPOSITOIES;
   }

  ngOnInit() {
    this.chargeDataUser();
  }

  chargeDataUser(): void {
    this.githubSearchService.detailsObservable.subscribe( res => {
      this.userDetails = res;
    });
    this.githubSearchService.repositoriesObservable.subscribe( res => {
      this.userRepositories = [];
      if (res && res.length > 0) {
        this.hasRepositories = false;
        this.userRepositories = res;
        this.userRepositories.sort((a , b) => b.stargazers_count - a.stargazers_count);
        this.userRepositories.forEach(a => {
          this.stars.push(a.stargazers_count);
        });
        this.allStars = this.stars.reduce((a , b) => a + b );
      } else {
        this.hasRepositories = true;
      }
    });
  }

}
