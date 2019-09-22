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
  repos:any[];
  stars: number[] = [];
  starsTotal:number;

  constructor(private getUserDataService: GetUserDataService) { }

  ngOnInit() {
    this.getUserDataService.getUserObservable.subscribe(details => {
      console.log("details", details)
      this.user = {
        avatar: details.avatar_url,
        name: details.name,
        login: details.login,
        email: details.email,
        organization: details.organization,
        location: details.location,
        followers: details.followers,
        repos: details.public_repos,
        bio: details.bio,
        link: details.html_url        
      };
    })
    this.getUserDataService.getReposObservable.subscribe(repos => {
      console.log("repos", repos)
      this.stars = [];
      this.repos = repos;
      this.repos.forEach(a => this.stars.push(a.stargazers_count));
      this.starsTotal = this.stars.reduce((a,b)=>a+b)
      console.log(this.stars, this.starsTotal)
}) 
  }
}