import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleConstant } from '../../constant/title.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [Title]
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(TitleConstant.HOME);
  }
}
