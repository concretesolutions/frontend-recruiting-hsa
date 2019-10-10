import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { Repo } from 'src/app/models/repo.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() informationUser: User;
  @Input() repos: Repo;
  @Input() error: string;
  constructor() { }

  ngOnInit() {
  }

}
