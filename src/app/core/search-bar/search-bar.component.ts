import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  userNameControl = new FormControl('', Validators.required);

  constructor(private route: Router) { }

  ngOnInit() {
  }

  searchUser(): void {
    const userName = this.userNameControl.value;

    if (!userName) {
      return;
    }

    this.userNameControl.setValue('');
    this.route.navigate(['/users', userName]);
  }

}
