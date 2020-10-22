import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/User';
import { Repo } from 'src/app/class/Repo';
import { GithubApiService } from 'src/app/sevices/github-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdetail: User;
  user: string;
  listrepo: Repo [] = [];


  constructor(private route: ActivatedRoute, private service: GithubApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
      this.user = params["user"];
      this.getUserDetail(this.user);
      this.getRepoDetail(this.user);
      })

  }

  private getUserDetail(user: string){
    this.service.Searchuser(user).subscribe(
      data =>{
        this.userdetail = new User();
        this.userdetail.avatar_url = data.avatar_url;
        this.userdetail.bio = data.bio;
        this.userdetail.email = data.email;
        this.userdetail.followers = data.followers;
        this.userdetail.name = data.name;
        this.userdetail.login = data.login;
        this.userdetail.html_url = data.html_url; 
    })
  }

  private getRepoDetail(user:string){
    this.service.Searchrepo(user).subscribe(
      data => {
        this.listrepo = [];
        for (let i = 0; i < data.length; i++) {
          let repo = new Repo();
          repo.name = data[i].name;
          repo.subname = data[i].description;
          repo.stars = data[i].stargazers_count;
          repo.url_repo = data[i].html_url;
          this.listrepo.push(repo);
        }
        this.listrepo.sort(function (a, b){
          return (b.stars - a.stars)
      })

        console.log("el detalle de los repos es: ");
        console.log(this.listrepo);
        
      }
    )
  }

}
