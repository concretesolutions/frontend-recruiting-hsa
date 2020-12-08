import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: GithubService, private router: Router) { }

  ngOnInit(): void { }
  
  nickName: string;

  button() {
    this.githubService.setNickName(this.nickName)
    this.router.navigate(['/user'])
  }

  


}

