import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { Repo } from 'src/app/models/repo.interface';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent  {

  userName: string;
  informationUser: User;
  repos: Repo;
  searchActive = false;
  notFound: string;

  constructor(private userService: UsersService) { }

  searchKeyDown(event) {
    if (event.key === 'Enter') {
      this.searchUser();
    }
  }

  searchUser() {
    this.searchActive = true;
    this.userService.getUserProfile(this.userName).subscribe((information) => {
      this.informationUser = information;
    }, error => {
      console.log(error);
      if (error.status === 404) {
        this.informationUser = undefined;
      }
    });
    this.userService.getRepos(this.userName).subscribe((repo) => {
      this.repos = repo;
    });
  }
}
