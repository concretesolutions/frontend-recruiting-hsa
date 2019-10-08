import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';
import { Router } from '@angular/router';
import { MESSAGE } from 'src/app/constants/constants-util';

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
      this.getRepositories(user);
      this.router.navigate(['/details']);
    }
  }

  getDetailsUser(user: string) {
    this.githubSearchService.getDetailsUser(user)
      .toPromise().then( res => {
        if (res && res.message !== MESSAGE && res.length !== 0) {
          this.githubSearchService.setDetailsUser(res);
        } else {
          this.router.navigate(['/notfound']);
        }

      }, error => {
        if (error.status === 404) {
          this.router.navigate(['/**']);
        }
      });
  }

  getRepositories(user: string) {
    this.githubSearchService.getRepositories(user)
      .toPromise().then( res => {
        if (res) {
          this.githubSearchService.setRepositoriesUser(res);
        }
      });
  }

}
