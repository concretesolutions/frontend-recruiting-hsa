import { Component, OnInit, Input } from '@angular/core';

import { UserProfile } from '../repositories.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input()
  profile: UserProfile;

  constructor() { }

  ngOnInit() {
  }

}
