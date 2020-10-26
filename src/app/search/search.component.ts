import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  username = '';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  search() {
    this.router.navigate(['/user/', this.username]);
  }
}
