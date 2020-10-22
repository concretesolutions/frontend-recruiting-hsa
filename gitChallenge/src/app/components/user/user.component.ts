import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/User';
import { GithubApiService } from 'src/app/sevices/github-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdetail: User;
  user: string;


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
        console.log("el detalle del usuario es: ");
        console.log(this.userdetail);
      
    })
  }

  private getRepoDetail(user:string){
    this.service.Searchrepo(user).subscribe(
      data => {
        console.log("el detalle de los repos es: ");
        console.log(data);
        
      }
    )
  }

}
