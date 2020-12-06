import { Component, OnInit } from '@angular/core';
import { Repositories } from 'src/app/interfaces/repositories.model';
import { Users } from 'src/app/interfaces/users.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.nickName = this.gitHubService.getNickName();
    this.gitHubService.setNickName('');
    this.getUserData();
  }
  
  nickName: string = '';
  user:Users;
  repos:Repositories[];
  
  getUserData(){
    this.gitHubService.getUser(this.nickName).subscribe(res=>{this.user=res; console.log(this.user)})

  }
}
