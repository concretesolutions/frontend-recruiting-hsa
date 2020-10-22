import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {

  public user: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public Search(){
    if (this.user) {
      this.router.navigate(['user/' + this.user]);
    }
    
  }

}
