import { Component, OnInit } from '@angular/core';

import { UserDetailService } from '@services/user-detail/user-detail.service';
/**
 * Result component for display search component with title and user info if this is found or page not found
 */
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  userExist: boolean = true;
  constructor(
    private userDetailService: UserDetailService
  ) { }

  ngOnInit(): void {
    this.userDetailService.userExist.subscribe(res => {
      this.userExist = res;
    });
  }

}
