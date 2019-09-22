import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'src/app/services/get-user-data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos:[] = [];

  constructor(private getUserDataService: GetUserDataService) { }

  ngOnInit() {
    this.getUserDataService.getReposObservable.subscribe(repos => {
      console.log("details Comppp", repos)
      this.repos = repos;
    }) 
  }

}
