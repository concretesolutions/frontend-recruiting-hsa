import { Component, OnInit } from '@angular/core';
import {GitUserService} from '../../shared/service/git-user/git-user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private gitUserService: GitUserService) { }

  ngOnInit() {
    this.gitUserService.getUser().subscribe(
      response => {
        console.log(response);
      }
    );

    this.gitUserService.getUserRepo().subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
