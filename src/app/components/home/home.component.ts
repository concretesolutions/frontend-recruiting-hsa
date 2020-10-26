import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchMe = '';
  public githubUser: string;

  constructor() { }
  ngOnInit() { }

  findUser(username) {
    this.githubUser = '';
    this.searchMe  = username;
}
}