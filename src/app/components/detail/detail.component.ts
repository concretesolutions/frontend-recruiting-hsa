import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  urlTest: string = "https://www.github.com";
  avatarUrl: string = "https://avatars1.githubusercontent.com/u/15023840?v=4";
  constructor() { }

  ngOnInit(): void {
  }

}
