import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from 'src/app/sevices/github-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: string;

  constructor(private route: ActivatedRoute, private service: GithubApiService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get('user');
    this.getUserDetail(this.user);
    this.getRepoDetail(this.user);
  }

  private getUserDetail(user: string){
    this.service.Searchuser(user).subscribe(
      data =>{
        console.log("el detalle del usuario es: ");
        console.log(data);
      
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
