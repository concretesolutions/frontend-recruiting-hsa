import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GitUserService} from '../../service/git-user/git-user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-shared',
  templateUrl: './search-shared.component.html',
  styleUrls: ['./search-shared.component.scss']
})
export class SearchSharedComponent implements OnInit {

  formUser: FormGroup;
  user: FormControl;

  @Output() dataUserEmitter: EventEmitter<string>;

  constructor(private gitUserService: GitUserService, private router: Router) {
    this.user = new FormControl('');
    this.dataUserEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.formUser = new FormGroup({
      inputUser: this.user
    });
  }

  searchUser() {
    this.gitUserService.GetUserInput(this.user.value);
    this.router.navigate(['detail']);
  }

}
