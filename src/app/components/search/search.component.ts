import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'src/app/services/get-user-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private getUserDataService: GetUserDataService) { }

  ngOnInit() {
  }

  search(username: string) {
    this.getDetails(username);
    this.getRepos(username);
  }

  getDetails(username: string) {
    this.getUserDataService.details(username).subscribe(details => {
      this.getUserDataService.getDetails(details);
    })
  }
  getRepos(username: string) {
    this.getUserDataService.repositories(username).subscribe(repos => {
      this.getUserDataService.getRepos(repos);
    })
  }
}