import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'src/app/services/get-user-data.service';
import { Details } from '../../models/Details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user:Details;

  constructor(private getUserDataService: GetUserDataService) { }

  ngOnInit() {
    this.getUserDataService.getUserObservable.subscribe(details => {
      console.log("details", details)
      this.user = {
        avatar: details.avatar_url,
        name: details.name,
        login: details.login,
        email: details.email,
        followers: details.followers,
        repos: details.public_repos,
        bio: details.bio        
      };
    }) 
  }
}