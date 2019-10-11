import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public textToSearch: string;

  constructor(private githubSearchService: GithubSearchService,
              private router: Router) {
                this.textToSearch = '';
               }

  ngOnInit() {
  }

  onClickSearch(textToSearch: string) {
    if (textToSearch && textToSearch !== '' && textToSearch !== undefined) {
      const user = textToSearch.trim();
      this.getDetailsUser(user);
    }
  }

  getDetailsUser(user: string) {
    this.githubSearchService.getDetailsUser(user)
      .toPromise().then( res => {
        if (res) {
          this.githubSearchService.setDetailsUser(res);
          this.getRepositories(user);
        } else {
          this.router.navigate(['/**']);
        }
      }, error => {
        if (error.status === 404) {
          this.router.navigate(['/**']);
        }
      }).catch( msj => {this.router.navigate(['/**']); });
  }

  getRepositories(user: string) {
    this.githubSearchService.getRepositories(user)
      .toPromise().then( response => {
        if (response) {
          this.githubSearchService.setRepositoriesUser(response);
          this.router.navigate(['/details']);
        }
      });
  }

}
