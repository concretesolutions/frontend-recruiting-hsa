import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
/**
 * Search component in charge of triggering the search for user information and their repositories
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: string = '';

  constructor(
    private router: Router
  ) { }

  search(username: string) {
    if(username !== "") {
      this.router.navigate([`/user/${username}/repos`]);
    }
  }

  ngOnInit(): void {
  }

}
