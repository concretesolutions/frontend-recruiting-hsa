import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleConstant } from './constant/title.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.DEFAULT);
  }
}
