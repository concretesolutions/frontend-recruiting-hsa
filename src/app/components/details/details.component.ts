import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';
 import { SearchRequestService } from '../../services/search-request.service';
 
import { Repository } from '../../repository';
import { User } from '../../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
 
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public searchMe = '';
  public githubUser: string;
  public label1 = "GitHub";
  public label2 = "Search";
  result = null
  users: User ;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;

constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService, private params: ActivatedRoute) { }
ngOnInit() {
  this.params.params.subscribe(routeParams => {
		this.searchGitService(this.params.snapshot.paramMap.get('user'));
	});
    
}

  async searchGitService(user){
      let res = this.githubUserRequest.githubUser(user);
      if(res){
        this.result = 'yes'
        this.users = this.githubUserRequest.users;
        this.userRepos.gitUserRepos(user);
      }else{
        this.result = 'error'
      }
  }


  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;
  }
  
  findUser(username) {
    this.githubUser = '';
    this.searchMe  = username;
}

}
