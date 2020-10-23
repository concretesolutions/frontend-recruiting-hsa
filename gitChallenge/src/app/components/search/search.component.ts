import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public user: string;

  constructor(private router: Router) {
    this.user = "";
   }

  ngOnInit(): void {
  }

  public Search(){
    if (this.user) {
      this.router.navigate(['user/' + this.user]);
    }
    
  }
}
