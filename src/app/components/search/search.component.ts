import {Search} from '../../models/search.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SearchRequestService} from '../../services/search-request.service';
import {Router} from '@angular/router';
import {Repository} from '../../repository';
import {User} from '../../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  label = "GitHub";
  label2 = "Search"
  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();
  public searchMe = '';
  public githubUser: string;
  
  users: User ;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;

  searchFor(data){
      // this.getName.emit(data.value.find);
      this.findUser(data.value.find);
      data.reset();
  }

  findUser(username) {
    this.githubUser = '';
    this.searchMe  = username;
    this.router.navigate(['/details/' + this.searchMe]);
}


}
