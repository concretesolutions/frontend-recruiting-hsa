import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'src/app/services/get-user-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  details:any = {};
  repos:[] = [];
  constructor(private getUserDataService: GetUserDataService) { }

  ngOnInit() {
  }
  
  onClick(username:string){
    this.getDetails(username);
    this.getRepos(username);
}

getDetails (username:string) {
  this.getUserDataService.details(username).subscribe(details => {
    this.details = details;
    console.log("aaaaaaaaa", this.details)
})
}
getRepos(username:string) {
  this.getUserDataService.repositories(username).subscribe(repos => {
    console.log("bbbbb",repos)
    this.repos = repos; 
})
}
}